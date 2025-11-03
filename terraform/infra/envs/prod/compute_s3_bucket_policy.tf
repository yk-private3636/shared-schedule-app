module "s3_bucket_policy" {
  source = "../../modules/s3_bucket_policy"

  principal_type       = "Service"
  principal_identifier = "cloudfront.amazonaws.com"
  bucket_id            = module.s3_bucket.id
  bucket_arn           = module.s3_bucket.arn
  actions              = ["s3:GetObject"]
  condition = {
    test     = "StringEquals"
    variable = "aws:SourceArn"
    values   = [module.cloudfront_distribution.arn]
  }
}