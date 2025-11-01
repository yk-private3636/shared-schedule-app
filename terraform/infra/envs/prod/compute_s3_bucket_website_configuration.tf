# module "s3_bucket_website_configuration" {
#   source = "../../modules/s3_bucket_website_configuration"

#   bucket_id             = module.s3_bucket.id
#   index_document_suffix = "index.html"
#   error_document_suffix = "error.html"

#   routing_rule_condition = {
#     key_prefix_equals = ""
#   }

#   redirect_rule = {
#     host_name               = module.s3_bucket.domain_name
#     protocol                = "https"
#     http_redirect_code      = 301
#     replace_key_prefix_with = ""
#     replace_key_with        = "index.html"
#   }
# }