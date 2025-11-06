module "ecr_api_cloudwatch_log_group" {
  source = "../../modules/cloudwatch_log_group"

  name              = local.cloudwatch_ecr_api_log_group_name
  retention_in_days = 3
  environment       = var.env
  project           = var.project_name
}