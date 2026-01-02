# security group名
variable "name" {
    type = string
}

# vpc id
variable "vpc_id" {
    type = string
}

# インバウンド通信ルール
variable "ingress" {
  type = list(object({
    from_port = number
    to_port = number
    protocol = string
    cidr_blocks = list(string)
    ipv6_cidr_blocks = list(string)
  }))
}

# アウトバウンド通信ルール
variable "egress" {
  type = list(object({
    from_port = number
    to_port = number
    protocol = string
    cidr_blocks = list(string)
    ipv6_cidr_blocks = list(string)
  }))
}