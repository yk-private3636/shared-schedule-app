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