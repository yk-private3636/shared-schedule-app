module "ngw" {
  source = "../../modules/ngw"

  name              = local.name
  subnet_id         = module.public_subnet[0].id
  eip_allocation_id = module.eip[0].allocation_id
  connectivity_type = "public"
}