resource "aws_cloudfront_distribution" "main" {
    origin {
        domain_name = var.origin.domain_name
        origin_id   = var.origin.origin_id
        origin_access_control_id = var.origin.origin_access_control_id
    }

    enabled = var.enabled
    is_ipv6_enabled = var.enabled
    comment = var.comment
    default_root_object = var.default_root_object

    default_cache_behavior {
        allowed_methods = var.default_cache_behavior.allowed_methods
        cached_methods  = var.default_cache_behavior.cached_methods
        target_origin_id       = var.default_cache_behavior.target_origin_id
        viewer_protocol_policy = var.default_cache_behavior.viewer_protocol_policy
        min_ttl                = var.default_cache_behavior.min_ttl
        default_ttl            = var.default_cache_behavior.default_ttl
        max_ttl                = var.default_cache_behavior.max_ttl

        function_association {
            event_type = var.function_association.event_type
            function_arn = var.function_association.function_arn
        }
        
        forwarded_values {
            query_string = var.forwarded_values.query_string
            cookies {
                forward = var.forwarded_values.cookies.forword
            }
        }
    }

    restrictions {
        geo_restriction {
            restriction_type = var.geo_restriction.type
            locations        = var.geo_restriction.locations
        }
    }

    viewer_certificate {
        cloudfront_default_certificate = var.cloudfront_default_certificate
        acm_certificate_arn = var.viewer_certificate.acm_certificate_arn
        ssl_support_method  = var.viewer_certificate.ssl_support_method
    }

    tags = {
        Name = var.name
    }
}