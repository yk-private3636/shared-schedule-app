module "vpc_endpoint_secretsmanager" {
  source = "../../modules/vpc_endpoint"

  name                = local.vpc_endpoint_secretsmanager_name
  vpc_id              = module.vpc.id
  service_name        = local.vpc_endpoint_secretsmanager_service_name
  endpoint_type       = "Interface"
  private_dns_enabled = true
  security_group_ids  = [module.security_group.id]
  subnet_ids          = [for subnet in module.private_subnet : subnet.id]
}