# secrets managerリソース名
variable "name" {
    type = string
}

# secrets managerシークレット文字列
variable "secret_string" {
    type = string
}

# シークレットを強制的に上書きするかどうか
variable "force_overwrite_replica_secret" {
    type    = bool
    default = false
}

# シークレットの復旧ウィンドウ（日数）
variable "recovery_window_in_days" {
    type    = number
    default = 0
}