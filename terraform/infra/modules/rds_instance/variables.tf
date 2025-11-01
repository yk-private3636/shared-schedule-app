variable "name" {
  type = string
}

variable "allocated_storage" {
  type = number
}

variable "db_name" {
  type = string
}

variable "engine" {
  type = string
}

variable "engine_version" {
  type = string
}

variable "instance_class" {
  type = string
}

variable "user" {
  type = object({
    name = string
    password = string
  })
}

variable "port" {
  type = number
}

variable "skip_final_snapshot" {
  type = bool
  default = false
}

variable "availability_zone" {
  type = string
}

variable "db_subnet_group_name" {
  type = string
}