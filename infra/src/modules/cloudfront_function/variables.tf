# cloudfront function名
variable "name" {
  type        = string
}

# cloudfront functionのランタイム
variable "runtime" {
  type        = string
  default     = "cloudfront-js-2.0"
}

# cloudfront functionのpublish設定
variable "publish" {
  type        = bool
  default     = true
}

# cloudfront functionのコメント
variable "function_comment" {
  type        = string
  default     = ""
}

# cloudfront functionのコードパス
variable "function_code_path" {
  type        = string
}