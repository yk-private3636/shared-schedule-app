# s3バケットリソースID
output "id" {
    value = aws_s3_bucket.main.id
}

# s3バケットドメイン名
output "domain_name" {
    value = aws_s3_bucket.main.bucket_domain_name
}