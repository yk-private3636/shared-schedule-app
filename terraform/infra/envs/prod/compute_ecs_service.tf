module "ecs_service" {
  source = "../../modules/ecs_service"

  name                   = local.ecs_service_name
  cluster_id             = module.ecs_cluster.id
  task_definition_arn    = module.ecs_task.arn
  desired_count          = 1
  force_new_deployment   = false
  enable_execute_command = true

  subnet_ids         = [for subnet in module.private_subnet : subnet.id]
  security_group_ids = [module.security_group.id]
  assign_public_ip   = false

  load_balancers = [{
    target_group_arn = module.alb.target_group_arn
    container_name   = local.ecs_task_api_name
    container_port   = 8080
  }]

  depends_on = [
    module.private_subnet,
    module.ecs_cluster,
    module.ecs_task
  ]
}