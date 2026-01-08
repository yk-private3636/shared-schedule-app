module "ecs_cluster_capacity_providers" {
  source = "../../modules/ecs_cluster_capacity_providers"

  cluster_name  = module.ecs_cluster.name
  desired_count = 1
}