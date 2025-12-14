module "ecs_task" {
  source = "../../modules/ecs_task"

  tasks_name         = local.ecs_tasks_name
  app_env            = var.env
  tasks_cpu          = 2048
  tasks_memory       = 4096
  execution_role_arn = module.ecs_iam.task_execution_role_arn
  task_role_arn      = module.ecs_iam.task_role_arn

  api_task = {
    name   = local.ecs_task_api_name
    image  = "${module.ecr.repository_url}:${var.api_tag_name}"
    cpu    = 1024
    memory = 2048
    port = {
      container = 8080
      host      = 8080
    }
    environment = {
      app_env                            = var.env
      app_port                           = "8080"
      client_origin                      = local.web_endpoint
      otel_service_name                  = local.name
      otel_exporter_otlp_traces_endpoint = "http://localhost:4318"
      otel_exporter_otlp_protocol        = "http/protobuf"
      auth0_issuer_url                   = local.auth0_api_origin
      auth0_audience                     = local.api_endpoint
    }
    secrets = [{
      name      = "DATABASE_WRITER_URL"
      valueFrom = module.secrets_rds_writer_connection.arn
      }, {
      name      = "DATABASE_READER_URL"
      valueFrom = module.secrets_rds_reader_connection.arn
    }]
    logConfiguration = {
      logDriver = "awslogs"
      options = {
        awslogsCreateGroup  = "true"
        awslogsGroup        = local.cloudwatch_ecr_api_log_group_name
        awslogsStreamPrefix = "app"
        awslogsRegion       = var.aws_region[0]
        mode                = "non-blocking"
      }
    }
    linuxParameters = {
      initProcessEnabled = true
    }
  }

  collector_task = {
    name   = local.ecs_task_collector_name
    image  = "${module.ecr.repository_url}:${var.collector_tag_name}"
    cpu    = 1024
    memory = 2048
    ports = [{
      container = 4318
      host      = 4318
      }, {
      container = 13133
      host      = 13133
    }]
    secrets = [{
      name      = "DD_API_KEY"
      valueFrom = module.secrets_datadog_api_key.arn
    }]
    logConfiguration = {
      logDriver = "awslogs"
      options = {
        awslogsCreateGroup  = "true"
        awslogsGroup        = local.cloudwatch_ecr_collector_log_group_name
        awslogsStreamPrefix = "app"
        awslogsRegion       = var.aws_region[0]
        mode                = "non-blocking"
      }
    }
    linuxParameters = {
      initProcessEnabled = true
    }
  }
}