# s3リソースID
variable "bucket_id" {
    type = string
}

# パブリックアクセスブロックを有効にするかどうか
variable "block_public_acls" {
    type = bool
    default = true
}

# パブリックアクセスポリシーを有効にするかどうか
variable "block_public_policy" {
    type = bool
    default = true
}

# パブリックアクセスACLを無視するかどうか
variable "ignore_public_acls" {
    type = bool
    default = true
}

# パブリックアクセスバケットを制限するかどうか
variable "restrict_public_buckets" {
    type = bool
    default = true
}

# パブリックアクセスブロックを破棄しないかどうか
variable "skip_destroy" {
    type = bool
    default = false
}