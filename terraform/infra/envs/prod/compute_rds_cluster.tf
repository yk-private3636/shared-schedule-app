module "rds_cluster" {
  source = "../../modules/rds_cluster"

  name                      = local.name
  availability_zones        = var.aws_az
  db_cluster_instance_class = var.db_instance_class
  storage_type              = "io1"
  allocated_storage         = 256
  iops                      = 1280
  master_username           = var.rds_master.name
  master_password           = var.rds_master.password
  database_name             = var.database_name
  skip_final_snapshot       = true
  subnet_ids                = [for subnet in module.private_subnet : subnet.id]
}