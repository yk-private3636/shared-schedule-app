# webエンドポイントURL
output "web_endpoint_url" {
  value = "https://${module.cloudfront_distribution.domain_name}"
}

# apiエンドポイントURL
output "api_endpoint_url" {
  value = local.api_endpoint
}