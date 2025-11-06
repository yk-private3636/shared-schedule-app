module "private_route_table_association" {
  source = "../../modules/route_table_association"

  count = min(length(module.private_subnet), length(module.private_route_table))

  subnet_id      = module.private_subnet[count.index].id
  route_table_id = module.private_route_table[count.index].id
}