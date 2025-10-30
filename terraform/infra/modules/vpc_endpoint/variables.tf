# vpcエンドポイントリソース名
variable "name" {
    type = string
}

# 対象vpc id
variable "vpc_id" {
    type = string
}

# 対象サービス名
variable "service_name" {
    type = string
}

# vpcエンドポイントタイプ
variable "endpoint_type" {
    type = string
}

# セキュリティグループIDs
variable "security_group_ids" {
    type = list(string)
    default = []
}

# サブネットIDs
variable "subnet_ids" {
    type = list(string)
    default = []
}

# ルートテーブルIDs
variable "route_table_ids" {
    type = list(string)
    default = []
}

# DNS有効/無効
variable "private_dns_enabled" {
    type = bool
}