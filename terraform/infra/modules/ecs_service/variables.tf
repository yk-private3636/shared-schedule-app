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

# コンテナ設定値
variable "load_balancers" {
    type = list(object({
        target_group_arn = string
      container_name = string
      container_port = number
    }))
}

# 自動デプロイ検知
variable "force_new_deployment" {
    type = bool
    default = false
}

# 割り当てサブネットID
variable "subnet_ids" {
    type = list(string)
}

# 割り当てセキュリティグループIDs
variable "security_group_ids" {
    type = list(string)
}

# パブリックIPを割り当て/割り当てない
variable "assign_public_ip" {
  type = bool
}