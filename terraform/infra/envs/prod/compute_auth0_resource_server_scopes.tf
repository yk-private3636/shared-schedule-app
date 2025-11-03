module "auth0_resource_server_scopes" {
  source = "../../modules/auth0_resource_server_scopes"

  resource_server_identifier = module.auth0_resource_server.identifier
  scopes = [
    {
      name        = "read:appointments"
      description = "Read appointments"
    }
  ]
}