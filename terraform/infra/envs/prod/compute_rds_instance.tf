module "rds_instance" {
  source = "../../modules/rds_instance"

  name                   = local.rds_instance_name
  allocated_storage      = 256
  db_name                = var.database_name
  engine                 = "postgres"
  engine_version         = "17.6"
  instance_class         = "db.m5.large"
  port                   = 5432
  user                   = var.db_user
  skip_final_snapshot    = true
  db_subnet_group_name   = module.rds_subnet_group.name
  vpc_security_group_ids = [module.rds_security_group.id]
  availability_zone      = var.aws_az[0]
}