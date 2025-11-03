# vpc 割り当てcidr_block
variable "cidr_block" {
    type = string
    default = "10.0.0.0/16"
}

# vpc名
variable "name" {
    type = string
}

# vpc内でのDNSサポート有効/無効
variable "enable_dns_support" {
    type = bool
    default = false
}

# vpc内でのDNS有効/無効
variable "enable_dns_hostnames" {
    type = bool
    default = false
}