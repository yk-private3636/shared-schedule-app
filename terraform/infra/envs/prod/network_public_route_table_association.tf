module "network_public_route_table_association" {
  source = "../../modules/route_table_association"

  count = 2

  subnet_id      = module.public_subnet[count.index].id
  route_table_id = module.public_route_table.id
}