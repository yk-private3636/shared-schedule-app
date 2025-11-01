resource "auth0_client" "main" {
  name            = var.name
  description     = var.description
  app_type        = var.app_type
  callbacks       = var.callbacks
  allowed_origins = var.allowed_origins
  allowed_logout_urls = var.allowed_logout_urls
  web_origins = var.web_origins
  is_first_party = var.is_first_party
  oidc_conformant = var.oidc_conformant

  jwt_configuration {
    lifetime_in_seconds = var.jwt_configuration.lifetime_in_seconds
    secret_encoded      = var.jwt_configuration.secret_encoded
  }

  refresh_token {
    leeway          = var.refresh_token.leeway
    token_lifetime  = var.refresh_token.token_lifetime
    rotation_type   = var.refresh_token.rotation_type
    expiration_type = var.refresh_token.expiration_type
  }

  grant_types = var.grant_types
}