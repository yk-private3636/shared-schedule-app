module "s3_bucket_ownership_controls" {
  source = "../../modules/s3_bucket_ownership_controls"

  bucket_id        = module.s3_bucket.id
  object_ownership = "BucketOwnerPreferred"
}