resource "aws_ecs_task_definition" "main" {
    family = var.tasks_name
    requires_compatibilities = [ "FARGATE" ]
    network_mode = "awsvpc"
    cpu = var.tasks_cpu
    memory = var.tasks_memory
    execution_role_arn = var.execution_role_arn
    task_role_arn = var.task_role_arn

    container_definitions = jsonencode([{
        name = var.api_task.name
        image = var.api_task.image
        cpu = var.api_task.cpu
        memory = var.api_task.memory
        essential = true
        portMappings = [{
            containerPort = var.api_task.port.container
            hostPort      = var.api_task.port.host
        }]
        linuxParameters = {
            initProcessEnabled = var.api_task.linuxParameters.initProcessEnabled
        }

        environment = [{
            name = "APP_ENV"
            value = var.app_env
        }, {
            name = "APP_PORT"
            value = tostring(var.api_task.port.container)
        }, {
            name = "OTEL_SERVICE_NAME"
            value = var.api_task.environment.otel_service_name
        }, {
            name = "OTEL_EXPORTER_OTLP_TRACES_ENDPOINT"
            value = var.api_task.environment.otel_exporter_otlp_traces_endpoint
        }, {
            name = "OTEL_EXPORTER_OTLP_PROTOCOL"
            value = var.api_task.environment.otel_exporter_otlp_protocol
        }, {
            name = "AUTH0_ISSUER_URL"
            value = var.api_task.environment.auth0_issuer_url
        }, {
            name = "AUTH0_AUDIENCE"
            value = var.api_task.environment.auth0_audience
        }]
        secrets = [
            for secret in var.api_task.secrets : {
                name      = secret.name
                valueFrom = secret.valueFrom
            }
        ]
        logConfiguration = {
            logDriver = var.api_task.logConfiguration.logDriver
            options = {
                "awslogs-create-group"  = var.api_task.logConfiguration.options.awslogsCreateGroup
                "awslogs-group"         = var.api_task.logConfiguration.options.awslogsGroup
                "awslogs-stream-prefix" = var.api_task.logConfiguration.options.awslogsStreamPrefix
                "awslogs-region"        = var.api_task.logConfiguration.options.awslogsRegion
                "mode"                  = var.api_task.logConfiguration.options.mode
            }
        }
    }])

    tags = {
      Name = var.tasks_name
    }
}