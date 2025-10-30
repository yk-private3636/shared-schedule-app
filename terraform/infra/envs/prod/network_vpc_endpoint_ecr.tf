module "vpc_endpoint_ecr_dkr" {
  source = "../../modules/vpc_endpoint"

  name                = local.vpc_endpoint_ecr_dkr_name
  vpc_id              = module.vpc.id
  service_name        = local.vpc_endpoint_ecr_dkr_service_name
  endpoint_type       = "Interface"
  private_dns_enabled = true
  security_group_ids  = [module.security_group.id]
  subnet_ids          = [for subnet in module.private_subnet : subnet.id]
}

module "vpc_endpoint_ecr_api" {
  source = "../../modules/vpc_endpoint"

  name                = local.vpc_endpoint_ecr_api_name
  vpc_id              = module.vpc.id
  service_name        = local.vpc_endpoint_ecr_api_service_name
  endpoint_type       = "Interface"
  private_dns_enabled = true
  security_group_ids  = [module.security_group.id]
  subnet_ids          = [for subnet in module.private_subnet : subnet.id]
}