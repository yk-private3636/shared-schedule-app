resource "aws_ecs_service" "main" {
    name = var.name
    cluster = var.cluster_id
    task_definition = var.task_definition_arn
    desired_count = var.desired_count
    launch_type = "FARGATE"

    # load_balancer {}

    # network_configuration {}
    
    tags = {
      Name = var.name
    }
}