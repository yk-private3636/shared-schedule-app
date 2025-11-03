# cloudfront function ARN
output "arn" {
  value = aws_cloudfront_function.main.arn
}