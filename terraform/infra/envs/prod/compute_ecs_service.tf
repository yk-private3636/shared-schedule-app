module "ecs_service" {
  source = "../../modules/ecs_service"

  name                = local.ecs_service_name
  cluster_id          = module.ecs_cluster.id
  task_definition_arn = module.ecs_task.arn
  desired_count       = 1
}