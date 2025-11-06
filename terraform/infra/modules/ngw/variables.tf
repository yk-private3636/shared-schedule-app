# nat_gateway リソース名
variable "name" {
  description = "The name of the NAT Gateway"
  type        = string
}

# NAT Gateway の接続タイプ
variable "connectivity_type" {
  description = "The connectivity type of the NAT Gateway (public or private)"
  type        = string
  validation {
    condition     = contains(["public", "private"], var.connectivity_type)
    error_message = "The connectivity type must be either 'public' or 'private'"
  }
}

# NAT Gateway を配置するサブネット ID
variable "subnet_id" {
  description = "The ID of the subnet in which to create the NAT Gateway"
  type        = string
}

# Elastic IP アロケーション ID (public 接続タイプの場合に必要)
variable "eip_allocation_id" {
  description = "The allocation ID of the Elastic IP for the NAT Gateway (required if connectivity_type is public)"
  type        = string
  default     = null
}