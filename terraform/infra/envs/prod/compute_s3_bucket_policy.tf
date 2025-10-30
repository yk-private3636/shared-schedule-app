module "s3_bucket_policy" {
  source = "../../modules/s3_bucket_policy"

  principal_type       = "*"
  principal_identifier = "*"
  bucket_id            = module.s3_bucket.id
  bucket_arn           = module.s3_bucket.arn
  actions              = ["s3:GetObject", "s3:ListBucket"]
}