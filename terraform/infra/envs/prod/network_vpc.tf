module "vpc" {
  source = "../../modules/vpc"

  name = local.name
}