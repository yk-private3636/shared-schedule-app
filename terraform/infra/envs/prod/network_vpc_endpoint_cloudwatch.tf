module "vpc_endpoint_cloudwatch" {
  source = "../../modules/vpc_endpoint"

  name                = local.vpc_endpoint_cloudwatch_name
  vpc_id              = module.vpc.id
  service_name        = local.vpc_endpoint_cloudwatch_service_name
  endpoint_type       = "Interface"
  private_dns_enabled = true
  security_group_ids  = [module.vpc_endpoint_security_group.id]
  subnet_ids          = [for subnet in module.private_subnet : subnet.id]
}