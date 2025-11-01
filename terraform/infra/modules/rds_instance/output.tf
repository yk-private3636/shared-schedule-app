# RDSインスタンスのエンドポイント
output "endpoint" {
    value = aws_db_instance.main.endpoint
}

# RDSインスタンスのDB名
output "db_name" {
    value = aws_db_instance.main.db_name
}