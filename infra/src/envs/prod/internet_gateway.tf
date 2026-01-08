module "igw" {
  source = "../../modules/igw"

  name   = local.name
  vpc_id = module.vpc.id
}