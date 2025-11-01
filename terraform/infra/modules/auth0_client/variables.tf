# auth0 クライアント名
variable "name" {
    type        = string   
}

# auth0 クライアントの説明
variable "description" {
    type        = string   
    default     = ""
}

# auth0 クライアントのアプリタイプ
variable "app_type" {
    type        = string   
}

# auth0 クライアントの許可オリジン
variable "allowed_origins" {
    type        = list(string)
}

# auth0 クライアントのコールバックURL
variable "callbacks" {
    type        = list(string)
}

# auth0 クライアントのログアウト許可URL
variable "allowed_logout_urls" {
    type        = list(string)
}

# auth0 クライアントのWebオリジン
variable "web_origins" {
    type        = list(string)
}

# auth0 クライアントがファーストパーティかどうか
variable "is_first_party" {
    type        = bool
    default     = false
}

# auth0 クライアントがOIDC準拠かどうか
variable "oidc_conformant" {
    type        = bool
    default     = true
}

# auth0 JWT設定
variable "jwt_configuration" {
    type = object({
        lifetime_in_seconds = number
        secret_encoded      = bool
        alg = string
    })
}

# auth0 リフレッシュトークン設定
variable "refresh_token" {
    type = object({
        leeway          = number
        token_lifetime  = number
        rotation_type   = string
        expiration_type = string
    })
}

# auth0 クライアントの許可グラントタイプ
variable "grant_types" {
    type        = list(string)
}