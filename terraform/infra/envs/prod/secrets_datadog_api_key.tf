module "datadog_api_key" {
  source = "../../modules/datadog_api_key"

  name = local.datadog_api_key_name
}

module "secrets_datadog_api_key" {
  source = "../../modules/secrets_manager"

  name                           = local.secrets_datadog_api_key_name
  force_overwrite_replica_secret = true
  recovery_window_in_days        = 0
  secret_string                  = module.datadog_api_key.key
}
