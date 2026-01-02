# クラスター名
variable "name" {
    type = string
}

# Container Insights 有効化/無効化
variable "allow_container_insights" {
    type    = bool
    default = false
}