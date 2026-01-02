# auth0 コネクションID
variable "connection_id" {
    type = string
}

# auth0 有効化クライアントIDリスト
variable "enabled_clients" {
    type = list(string)
}