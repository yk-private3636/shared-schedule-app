# s3 websiteドメイン名
output "website_domain_name" {
    value = aws_s3_bucket_website_configuration.main.website_domain
}