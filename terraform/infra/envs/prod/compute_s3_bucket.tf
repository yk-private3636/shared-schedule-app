module "s3_bucket" {
  source = "../../modules/s3_bucket"

  name          = local.name
  bucket        = local.s3_bucket_name
  force_destroy = true
}