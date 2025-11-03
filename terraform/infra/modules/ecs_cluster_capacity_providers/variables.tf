# ecsクラスター名
variable "cluster_name" {
    type = string
}

# タスク数
variable "desired_count" {
  type = number
}