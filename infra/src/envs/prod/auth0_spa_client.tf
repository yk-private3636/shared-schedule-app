module "auth0_spa_client" {
  source = "../../modules/auth0_client"

  name            = local.auth0_spa_client_name
  description     = "${local.name} Auth0 SPA Client"
  app_type        = "spa"
  is_first_party  = true
  oidc_conformant = true
  callbacks = [
    "https://${module.cloudfront_distribution.domain_name}/oauth/callback"
  ]
  allowed_origins = [
    "https://${module.cloudfront_distribution.domain_name}"
  ]
  allowed_logout_urls = [
    "https://${module.cloudfront_distribution.domain_name}/"
  ]
  web_origins = [
    "https://${module.cloudfront_distribution.domain_name}"
  ]

  jwt_configuration = {
    lifetime_in_seconds = 86400
    secret_encoded      = true
    alg                 = "RS256"
  }

  refresh_token = {
    expiration_type = "expiring"
    rotation_type   = "rotating"
    leeway          = 0
    token_lifetime  = 2592000
    policies = {
      audience = local.api_endpoint
      scope    = []
    }
  }

  grant_types = [
    "authorization_code",
    "refresh_token"
  ]

  depends_on = [module.auth0_resource_server]
}