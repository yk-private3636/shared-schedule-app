module "public_subnet" {
  source = "../../modules/subnet"

  count = 2

  name                    = local.name
  vpc_id                  = module.vpc.id
  availability_zone       = var.aws_az[count.index]
  map_public_ip_on_launch = true
  cidr_block              = cidrsubnet(module.vpc.cidr_block, 8, count.index)
}