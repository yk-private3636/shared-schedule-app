variable "bucket_id" {
    type = string
}

variable "index_document_suffix" {
    type = string
}

variable "error_document_suffix" {
    type = string
}

variable "routing_rule_condition" {
    type = object({
        key_prefix_equals = string 
    })
}

variable "redirect_rule" {
    type = object({
        host_name = string
        http_redirect_code = number
        protocol = string
        replace_key_prefix_with = string
        replace_key_with = string
    })
}