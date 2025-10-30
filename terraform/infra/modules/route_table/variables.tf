# ルートテーブルリソース名
variable "name" {
    type = string
}

# 対象vpc id
variable "vpc_id" {
    type = string
}

# ルーティング
variable "routes" {
    type = list(object({
        cidr_block = string
        gateway_id = string
        egress_only_gateway_id = string
    }))
}