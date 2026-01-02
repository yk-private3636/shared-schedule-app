resource "aws_s3_bucket_website_configuration" "main" {
    bucket = var.bucket_id

    index_document {
        suffix = var.index_document_suffix
    }

    error_document {
      key = var.error_document_suffix
    }

    routing_rule {
        condition {
            key_prefix_equals = var.routing_rule_condition.key_prefix_equals
        }

        redirect {
            host_name = var.redirect_rule.host_name
            http_redirect_code = var.redirect_rule.http_redirect_code
            protocol = var.redirect_rule.protocol
            replace_key_prefix_with = var.redirect_rule.replace_key_prefix_with
            replace_key_with = var.redirect_rule.replace_key_with
        }
    }
}