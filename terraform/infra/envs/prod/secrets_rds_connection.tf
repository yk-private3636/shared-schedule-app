module "secrets_rds_writer_connection" {
  source = "../../modules/secrets_manager"

  name          = "rds-writer-connection"
  secret_string = "postgresql://${var.db_user.name}:${var.db_user.password}@${module.rds_instance.endpoint}/${var.database_name}?schema=${var.database_schema}"
}

module "secrets_rds_reader_connection" {
  source = "../../modules/secrets_manager"

  name          = "rds-reader-connection"
  secret_string = "postgresql://${var.db_user.name}:${var.db_user.password}@${module.rds_instance.endpoint}/${var.database_name}?schema=${var.database_schema}"
}