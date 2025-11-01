# cloudfrontドメイン名
output "cloudfront_domain_name" {
  value = "https://${module.cloudfront_distribution.domain_name}"
}