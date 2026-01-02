resource "auth0_resource_server_scopes" "main" {
    resource_server_identifier  = var.resource_server_identifier
    
    dynamic "scopes" {
        for_each = var.scopes
        content {
          name = scopes.value.name
          description = scopes.value.description
        }
    }
}