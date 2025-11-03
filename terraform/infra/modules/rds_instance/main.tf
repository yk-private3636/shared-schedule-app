resource "aws_db_instance" "main" {
  identifier = var.name
  allocated_storage = var.allocated_storage
  db_name = var.db_name
  engine = var.engine
  engine_version = var.engine_version
  instance_class = var.instance_class
  username = var.user.name
  password = var.user.password
  port = var.port
  skip_final_snapshot = var.skip_final_snapshot
  availability_zone = var.availability_zone
  db_subnet_group_name = var.db_subnet_group_name

  tags = {
    Name = var.name
  }
}