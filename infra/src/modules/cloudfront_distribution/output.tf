# cloudfront ARN
output "arn" {
    value = aws_cloudfront_distribution.main.arn
}

# cloudfrontドメイン名
output "domain_name" {
    value = aws_cloudfront_distribution.main.domain_name
}