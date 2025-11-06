module "eip" {
  source = "../../modules/eip"

  count = length(module.public_subnet)

  domain = "vpc"
  name   = "local.ngw_eip_name-${count.index + 1}"

  depends_on = [module.igw]
}