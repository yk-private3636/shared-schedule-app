module "ecs_cluster" {
  source = "../../modules/ecs_cluster"

  name                     = local.name
  allow_container_insights = false
}