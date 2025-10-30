module "vpc_endpoint_s3" {
  source = "../../modules/vpc_endpoint"

  name                = local.vpc_endpoint_s3_name
  vpc_id              = module.vpc.id
  service_name        = local.vpc_endpoint_s3_service_name
  endpoint_type       = "Gateway"
  private_dns_enabled = false
  security_group_ids  = []
  subnet_ids          = []
  route_table_ids     = [module.public_route_table.id]
}