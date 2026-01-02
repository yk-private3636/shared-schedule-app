resource "auth0_resource_server" "main" {
    name        = var.name
    identifier  = var.identifier
    signing_alg = var.signing_alg
    allow_offline_access = var.allow_offline_access
    token_lifetime = var.token_lifetime
    skip_consent_for_verifiable_first_party_clients = var.skip_consent_for_verifiable_first_party_clients
    token_dialect = var.token_dialect
}