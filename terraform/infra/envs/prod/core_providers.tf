provider "aws" {
  region = var.aws_region[0]
}

provider "auth0" {
  domain        = var.auth0_domain
  client_id     = var.auth0_client_id
  client_secret = var.auth0_client_secret
}

provider "datadog" {
  api_key               = var.datadog_api_key
  app_key               = var.datadog_app_key
  api_url               = "https://${var.datadog_api_host}"
  cloud_provider_region = var.aws_region[0]
}