module "secrets_rds_writer_connection" {
  source = "../../modules/secrets_manager"

  name                           = local.secrets_rds_writer_connection_name
  force_overwrite_replica_secret = true
  recovery_window_in_days        = 0
  secret_string                  = "postgresql://${var.db_user.name}:${var.db_user.password}@${module.rds_instance.endpoint}/${var.database_name}?schema=${var.database_schema}"
}

module "secrets_rds_reader_connection" {
  source = "../../modules/secrets_manager"

  name                           = local.secrets_rds_reader_connection_name
  force_overwrite_replica_secret = true
  recovery_window_in_days        = 0
  secret_string                  = "postgresql://${var.db_user.name}:${var.db_user.password}@${module.rds_instance.endpoint}/${var.database_name}?schema=${var.database_schema}"
}