# ecr名
variable "name" {
    type = string
}

# ecrの削除を許容するのか
variable "allow_force_delete" {
    type = bool
    default = false # 許容しない
}

# imageタグの変更を許容するのか
variable "allow_image_tag_mutation" {
    type = bool
    default = true # 許容する
}

# イメージ脆弱性スキャンを行うのか
variable "allow_scan_on_push" {
    type = bool
    default = true # 行う
}