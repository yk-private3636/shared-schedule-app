resource "aws_acm_certificate" "main" {
    domain_name = var.domain_name
    validation_method = var.validation_method

    tags = {
      Name = var.name
    }
}