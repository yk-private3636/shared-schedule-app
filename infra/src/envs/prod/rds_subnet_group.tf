module "rds_subnet_group" {
  source = "../../modules/rds_subnet_group"

  name       = local.rds_subnet_group_name
  subnet_ids = [for subnet in module.private_subnet : subnet.id]
}