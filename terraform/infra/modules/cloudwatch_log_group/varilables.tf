# ロググループ名
variable "name" {
    type = string
}

# 環境名（例: dev, staging, prod）
variable "environment" {
    type = string
}

# プロジェクト名
variable "project" {
    type = string
}

# ログ保持期間（日数）
variable "retention_in_days" {
    type    = number
}