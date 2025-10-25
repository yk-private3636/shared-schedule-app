# vpc 割り当てcidr_block
variable "cidr_block" {
    type = string
    default = "10.0.0.0/16"
}

# vpc名
variable "name" {
    type = string
}