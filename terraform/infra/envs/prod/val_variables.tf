# 作成環境
variable "env" {
  description = "The deployment environment (e.g. dev, staging, prod)."
  type        = string

  validation {
    condition     = contains(["dev", "staging", "prod"], var.env)
    error_message = "env must be one of: dev, staging, prod."
  }
}

# プロジェクト名
variable "project_name" {
  description = "The name of the project. Used for naming resources and tagging."
  type        = string
  default     = "shared-schedule-app"

  validation {
    condition     = var.project_name == "shared-schedule-app"
    error_message = "The project_name variable must be set to 'shared-schedule-app'. Overriding this value is not allowed."
  }
}

# 使用リージョンリスト
variable "aws_region" {
  description = "The AWS region in which to deploy resources."
  type        = list(string)
  default     = ["ap-northeast-1", "ap-northeast-3"]
}

# 使用AZリスト
variable "aws_az" {
  type    = list(string)
  default = ["ap-northeast-1a", "ap-northeast-1c", "ap-northeast-1d"]
}

# apiタグ名
variable "api_tag_name" {
  type    = string
  default = "api-latest"
}

# rds インスタンスクラスタイプ
variable "db_instance_class" {
  type = string
}

# rds データベース名
variable "database_name" {
  type = string
}

# rds スキーマ名
variable "database_schema" {
  type = string
}

# rds ユーザー情報
variable "db_user" {
  type = object({
    name     = string
    password = string
  })
  sensitive = true
}

# auth0 クライアントID
variable "auth0_client_id" {
  type = string
}

# auth0 クライアントシークレット
variable "auth0_client_secret" {
  type      = string
  sensitive = true
}

# auth0 ドメイン
variable "auth0_domain" {
  type = string
}

# ecs collectorタスクイメージ
variable "collector_task_image" {
  type = string
}