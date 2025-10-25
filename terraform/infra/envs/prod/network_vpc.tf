module "vpc" {
  source = "../../modules/vpc"

  vpc_tag_name = "${var.project_name}-${var.env}"
}