# s3リソースID
variable "bucket_id" {
    type = string
}

# プリンシパルタイプ
variable "principal_type" {
    type = string
}

# プリンシパル識別子
variable "principal_identifier" {
    type = string
}

# アクション
variable "actions" {
    type = list(string)
}

# s3バケットARN
variable "bucket_arn" {
    type = string
}

# 条件
variable "condition" {
    type = object({
        test     = string
        variable = string
        values   = list(string)
    })
    default = {
      test = ""
      variable = ""
      values = []
    }
}