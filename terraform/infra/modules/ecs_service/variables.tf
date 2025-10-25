# ecsサービス名
variable "name" {
    type = string
}

# ecsクラスターID
variable "cluster_id" {
    type = string
}

# ecsタスクARN
variable "task_definition_arn" {
    type = string
}

# タスク数(分散数)
variable "desired_count" {
    type = number
}