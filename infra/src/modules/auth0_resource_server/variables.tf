# auth0リソースサーバー名
variable "name" {
    type = string
}

# auth0リソースサーバー識別子
variable "identifier" {
    type = string
}

# auth0リソースサーバー署名アルゴリズム
variable "signing_alg" {
    type    = string
    default = "RS256"
}

# auth0リソースサーバーオフラインアクセス許可
variable "allow_offline_access" {
    type    = bool
    default = true
}

# auth0リソースサーバートークン有効期限（秒）
variable "token_lifetime" {
    type    = number
}

# auth0リソースサーバースキップ同意（検証可能なファーストパーティクライアント用）
variable "skip_consent_for_verifiable_first_party_clients" {
    type    = bool
    default = true
}

# auth0リソースサーバートークンダイアレクト
variable "token_dialect" {
    type    = string
    default = "access_token_authz"
}