module "private_route_table" {
  source = "../../modules/route_table"

  count = length(module.private_subnet)

  name   = "${local.route_table_private_name}-${count.index + 1}"
  vpc_id = module.vpc.id

  routes = [{
    cidr_block             = "0.0.0.0/0"
    gateway_id             = module.ngw[count.index].id
    egress_only_gateway_id = ""
  }]
}