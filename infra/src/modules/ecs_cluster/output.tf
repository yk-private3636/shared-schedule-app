# ecsクラスターID
output "id" {
    value = aws_ecs_cluster.main.id
}

# ecsクラスター名
output "name" {
    value = aws_ecs_cluster.main.name
}