# rdsクラスター名
variable "name" {
    type = string
}

# rds配置AZ
variable "availability_zones" {
    type = list(string)
}

# rdsインスタンスクラス
variable "db_cluster_instance_class" {
    type = string
}

# rdsストレージタイプ
variable "storage_type" {
    type = string
}

# 各rdsに割り当てるストレージ容量(GB)
variable "allocated_storage" {
    type = number
}

# 秒間のIO数
variable "iops" {
  type = number
}

# dbマスターユーザー名
variable "master_username" {
  type = string
}

# dbマスターパスワード
variable "master_password" {
  type = string
  sensitive = true
}

# db名
variable "database_name" {
  type = string
  sensitive = true
}

# リソース削除時にスナップショットを保存するのか
variable "skip_final_snapshot" {
  type = bool
  default = false
}

# rdsに割り当てるsubnetIDs
variable "subnet_ids" {
  type = list(string)
}