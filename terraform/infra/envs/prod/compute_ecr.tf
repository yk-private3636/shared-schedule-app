module "ecr" {
  source = "../../modules/ecr"

  name                     = local.name
  allow_force_delete       = false
  allow_image_tag_mutation = true
  allow_scan_on_push       = true
}