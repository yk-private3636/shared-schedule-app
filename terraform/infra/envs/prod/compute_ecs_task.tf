module "ecs_task" {
  source = "../../modules/ecs_task"

  tasks_name         = local.ecs_tasks_name
  app_env            = var.env
  tasks_cpu          = 1024
  tasks_memory       = 2048
  execution_role_arn = module.ecs_iam.arn

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
      otel_service_name                  = local.name
      otel_exporter_otlp_traces_endpoint = "" # TODO: otlpサービスエンドポイントを指定すること
      otel_exporter_otlp_protocol        = "http/protobuf"
      auth0_issuer_url                   = "" # TODO: auth0設定値
      auth0_audience                     = "" # TODO: auth0設定値
    }
  }
}