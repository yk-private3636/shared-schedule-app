provider "aws" {
  region = var.aws_region[0]
}

provider "auth0" {
  domain = var.auth0_domain
}