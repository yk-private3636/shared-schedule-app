# auth0リソースサーバー識別子
variable "resource_server_identifier" {
  type = string
}

# auth0リソースサーバースコープ一覧
variable "scopes" {
  type = list(object({
    name        = string
    description = string
  }))
}