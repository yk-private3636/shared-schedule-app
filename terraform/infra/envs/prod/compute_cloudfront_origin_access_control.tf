module "cloudfront_origin_access_control" {
  source = "../../modules/cloudfront_origin_access_control"

  name                              = local.name
  origin_access_control_origin_type = "s3"
  signing_behavior                  = "always"
  signing_protocol                  = "sigv4"
}