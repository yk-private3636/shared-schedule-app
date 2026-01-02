# secrets manager ARN
output "arn" {
    value = aws_secretsmanager_secret.main.arn  
}