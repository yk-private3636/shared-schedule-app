resource "aws_ecs_service" "main" {
    name = var.name
    cluster = var.cluster_id
    task_definition = var.task_definition_arn
    desired_count = var.desired_count
    launch_type = "FARGATE"
    force_new_deployment = var.force_new_deployment
    enable_execute_command = var.enable_execute_command

    triggers = {
      redeployment = var.force_new_deployment ? plantimestamp() : ""
    }

    dynamic "load_balancer" {
      for_each = var.load_balancers
      content {
        target_group_arn = load_balancer.value.target_group_arn
        container_name = load_balancer.value.container_name
        container_port = load_balancer.value.container_port
      }
    }

    network_configuration {
      subnets = var.subnet_ids
      security_groups = var.security_group_ids
      assign_public_ip = var.assign_public_ip
    }
    
    tags = {
      Name = var.name
    }
}