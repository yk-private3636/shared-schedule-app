resource "aws_ecr_repository" "main" {
    name = var.name
    force_delete = var.allow_force_delete
    image_tag_mutability = var.allow_image_tag_mutation ? "MUTABLE" : "IMMUTABLE"

    image_scanning_configuration {
        scan_on_push = var.allow_scan_on_push
    }

    tags = {
      Name = var.name
    }
}