module "private_route_table" {
  source = "../../modules/route_table"

  name   = local.route_table_private_name
  vpc_id = module.vpc.id

  routes = [{
    cidr_block             = module.vpc.cidr_block
    gateway_id             = "local"
    egress_only_gateway_id = ""
  }]
}