resource "auth0_connection" "main" {
    name       = var.name
    strategy   = var.strategy
}