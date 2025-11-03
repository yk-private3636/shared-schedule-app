module "auth0_resource_server" {
  source = "../../modules/auth0_resource_server"

  name                                            = local.auth0_api_name
  identifier                                      = local.api_endpoint
  token_lifetime                                  = 86400
  token_dialect                                   = "access_token_authz"
  allow_offline_access                            = true
  signing_alg                                     = "RS256"
  skip_consent_for_verifiable_first_party_clients = true
}