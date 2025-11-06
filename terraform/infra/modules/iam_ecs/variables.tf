# タスク実行ロール名
variable "iam_role_task_execution_name" {
    type = string
}

# タスクロール名
variable "iam_role_task_name" {
    type = string
}

# タスク実行ポリシー名
variable "iam_role_policy_task_execution_name" {
    type = string
}

# SSMメッセージ用ポリシー名
variable "iam_role_policy_ssmmessage_name" {
    type = string
}