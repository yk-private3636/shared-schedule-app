resource "auth0_connection_clients" "main" {
    connection_id = var.connection_id
    enabled_clients = var.enabled_clients
}