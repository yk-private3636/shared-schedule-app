# subnetリソース名
variable "name" {
    type = string
}

# 割り当てvpc id
variable "vpc_id" {
    type = string
}

# 割り当てcidr_block
variable "cidr_block" {
    type = string
}

# 割り当てAZ
variable "availability_zone" {
    type = string
}

# public ip割り当て
variable "map_public_ip_on_launch" {
    type = bool
}