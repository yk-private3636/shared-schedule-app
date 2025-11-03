resource "aws_cloudfront_function" "main" {
  name    = var.name
  runtime = var.runtime
  publish = var.publish
  comment = var.function_comment
  code    = var.function_code_path
}