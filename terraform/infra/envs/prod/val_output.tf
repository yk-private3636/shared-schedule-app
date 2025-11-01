# cloudfrontドメイン名
output "cloudfront_domain_name" {
  value = module.cloudfront_distribution.domain_name
}