resource "aws_s3_bucket_acl" "main" {
    bucket = var.bucket_id
    acl    = var.acl
}