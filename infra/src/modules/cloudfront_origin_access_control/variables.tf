# cloudfront アクセスコントロールリソース名
variable "name" {
    type = string 
}

# オリジンアクセスコントロールのオリジンタイプ設定
variable "origin_access_control_origin_type" {
    type = string 
}

# サイニング動作設定
variable "signing_behavior" {
    type = string 
}
# サイニングプロトコル設定
variable "signing_protocol" {
    type = string 
}
