resource "aws_ecs_cluster" "main" {
    name = var.name

    setting {
        name = "containerInsights"
        value = var.allow_container_insights ? "enabled" : "disabled"
    }
    
    tags = {
        Name = var.name
    }
}