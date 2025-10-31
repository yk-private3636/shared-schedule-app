# cloudfrontリソース名
variable "name" {
    type    = string
}

# オリジン設定
variable "origin" {
    type = object({
      domain_name = string
      origin_id   = string
      origin_access_control_id = string
    })
}

# ディストリビューションの有効化設定
variable "enabled" {
    type    = bool
    default = true
}

# コメント設定
variable "comment" {
    type    = string
    default = ""
}

# デフォルトルートオブジェクト設定
variable "default_root_object" {
    type    = string
    default = "index.html"
}

# デフォルトキャッシュビヘイビア設定
variable "default_cache_behavior" {
    type = object({
        target_origin_id       = string
        viewer_protocol_policy = string
        allowed_methods        = list(string)
        cached_methods         = list(string)
        min_ttl                = number
        default_ttl            = number
        max_ttl                = number
    })
}

# ジオ制限設定
variable "geo_restriction" {
    type = object({
        type = string
        locations        = list(string)
    })
}

# ビューワー証明書設定
variable "viewer_certificate" {
    type = object({
        cloudfront_default_certificate = bool
        acm_certificate_arn = string
        ssl_support_method  = string
    })
}

# CloudFrontデフォルト証明書使用設定
variable "cloudfront_default_certificate" {
    type    = bool
    default = true
}

# フォワーデッド値設定
variable "forwarded_values" {
    type = object({
        query_string = bool
        cookies = object({
            forword = string
        })
    })
}