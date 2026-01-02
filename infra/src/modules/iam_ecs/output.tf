# task execution roleのARN
output "task_execution_role_arn" {
    value = aws_iam_role.task_execution.arn  
}

# task roleのARN
output "task_role_arn" {
    value = aws_iam_role.task.arn  
}