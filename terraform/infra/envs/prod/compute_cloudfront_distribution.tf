module "cloudfront_distribution" {
  source = "../../modules/cloudfront_distribution"

  name                = local.name
  enabled             = true
  default_root_object = "index.html"

  origin = {
    domain_name              = module.s3_bucket.domain_name
    origin_id                = module.s3_bucket.id
    origin_access_control_id = module.cloudfront_origin_access_control.id
  }

  geo_restriction = {
    type      = "whitelist"
    locations = ["JP"]
  }

  viewer_certificate = {
    cloudfront_default_certificate = true
    acm_certificate_arn            = ""
    ssl_support_method             = "sni-only"
  }

  forwarded_values = {
    query_string = false
    cookies = {
      forword = "none"
    }
  }

  default_cache_behavior = {
    target_origin_id       = module.s3_bucket.id
    allowed_methods        = ["GET", "HEAD"]
    cached_methods         = ["GET", "HEAD"]
    viewer_protocol_policy = "redirect-to-https"
    min_ttl                = 86400
    max_ttl                = 86400
    default_ttl            = 86400
  }
}