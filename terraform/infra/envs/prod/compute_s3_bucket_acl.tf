module "s3_bucket_acl" {
  source = "../../modules/s3_bucket_acl"

  bucket_id = module.s3_bucket.id
  acl       = "private"
}