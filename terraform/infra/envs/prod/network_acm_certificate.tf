# module "acm_certificate" {
#   source = "../../modules/acm_certificate"

#   name              = local.cf_acm_certificate_name
#   domain_name       = module.s3_bucket_website_configuration.website_domain_name
#   validation_method = "DNS"
# }