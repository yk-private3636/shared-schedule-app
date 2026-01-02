# acm_certificateリソース名
variable "name" {
    type = string
}

# acm_certificateドメイン名
variable "domain_name" {
    type = string
}

# acm_certificate検証方法
variable "validation_method" {
    type = string
}
