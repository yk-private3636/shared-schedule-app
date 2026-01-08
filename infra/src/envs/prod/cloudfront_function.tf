module "cloudfront_function_ensure_html_extension" {
  source = "../../modules/cloudfront_function"

  name               = "ensure-html-extension"
  runtime            = "cloudfront-js-2.0"
  function_code_path = file("../../functions/cloudfront/ensure_html_extension.js")
  publish            = true
}