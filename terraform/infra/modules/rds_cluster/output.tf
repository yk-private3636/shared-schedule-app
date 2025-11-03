# rdsクラスターID
output "id" {
    value = aws_rds_cluster.main.id
}

# rdsエンジン
output "engine" {
    value = aws_rds_cluster.main.engine
}

# rdsエンジンバージョン
output "engine_version" {
    value = aws_rds_cluster.main.engine_version
}