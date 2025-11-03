# albリソース名
variable "alb_name" {
    type = string
}

# albパブリック/プライベート設定
variable "internal" {
    type = bool
}

# albセキュリティグループIDs
variable "security_group_ids" {
    type = list(string)
}

# alb割り当てサブネットIDs
variable "subnet_ids" {
    type = list(string)
}

# albターゲットリソース名
variable "alb_target_name" {
    type = string
}

# alb リスニングプロトコル
variable "protocol" {
    type = string
}

# alb リスニングポート番号
variable "port" {
    type = number
}

# vpc id
variable "vpc_id" {
    type = string
}