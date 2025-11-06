module "ngw" {
  source = "../../modules/ngw"

  count = length(module.public_subnet)

  name              = "${local.name}-${count.index + 1}"
  subnet_id         = module.public_subnet[count.index].id
  eip_allocation_id = module.eip[count.index].allocation_id
  connectivity_type = "public"
}