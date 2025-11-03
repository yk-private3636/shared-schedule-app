resource "aws_rds_cluster" "main" {
    cluster_identifier = var.name
    availability_zones = var.availability_zones
    engine = "postgres"
    db_cluster_instance_class = var.db_cluster_instance_class
    storage_type = var.storage_type
    allocated_storage = var.allocated_storage
    iops = var.iops
    master_username = var.master_username
    master_password = var.master_password
    database_name = var.database_name
    skip_final_snapshot = var.skip_final_snapshot
    db_subnet_group_name = aws_db_subnet_group.main.name

    tags = {
      Name = var.name
    }
}

resource "aws_db_subnet_group" "main" {
  name = var.name
  subnet_ids = var.subnet_ids

  tags = {
    Name = var.name
  }
}