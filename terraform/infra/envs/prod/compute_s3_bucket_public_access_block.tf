module "s3_bucket_public_access_block" {
  source = "../../modules/s3_bucket_public_access_block"

  bucket_id               = module.s3_bucket.id
  block_public_acls       = false
  block_public_policy     = false
  ignore_public_acls      = false
  restrict_public_buckets = false
  skip_destroy            = false
}