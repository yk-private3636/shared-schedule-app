module "private_route_table" {
  source = "../../modules/route_table"

  # count = length(module.private_subnet)

  # name   = "${local.route_table_private_name}-${count.index + 1}"
  name   = local.route_table_private_name
  vpc_id = module.vpc.id

  routes = [{
    cidr_block = "0.0.0.0/0"
    # gateway_id             = module.ngw[count.index].id
    gateway_id             = module.ngw.id
    egress_only_gateway_id = ""
  }]
}