resource "aws_secretsmanager_secret" "main" {
    name = var.name
    force_overwrite_replica_secret = var.force_overwrite_replica_secret
    recovery_window_in_days        = var.recovery_window_in_days
}

resource "aws_secretsmanager_secret_version" "main" {
    secret_id     = aws_secretsmanager_secret.main.id
    secret_string = var.secret_string
}