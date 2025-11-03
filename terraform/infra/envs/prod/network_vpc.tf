module "vpc" {
  source = "../../modules/vpc"

  name                 = local.name
  enable_dns_support   = true
  enable_dns_hostnames = true
}