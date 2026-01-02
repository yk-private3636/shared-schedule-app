resource "aws_ecs_cluster_capacity_providers" "main" {
    cluster_name = var.cluster_name
    capacity_providers = [ "FARGATE" ]

    default_capacity_provider_strategy {
        capacity_provider = "FARGATE"
        base = var.desired_count
        weight = 100
    }

}