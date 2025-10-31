locals {
  name                                     = "${var.env}-${var.project_name}"                    # 共通リソース名
  ecs_service_name                         = "${var.env}-service"                                # ecsサービス名
  ecs_tasks_name                           = "${var.env}-tasks"                                  # ecsタスク名
  ecs_iam_role_name                        = "${var.env}EcsRole"                                 # ecsロール名
  ecs_iam_role_policy_name                 = "${var.env}EcsRolePolicy"                           # ecsポリシー名
  ecs_task_api_name                        = "${var.env}-api-task"                               # ecs apiタスク名
  alb_target_name                          = "${var.env}-alb-target"                             # alb ターゲット名
  rds_instance_name                        = "${var.env}-rds-instance"                           # rdsインスタンス名
  s3_bucket_name                           = "${var.env}-${var.project_name}"                    # s3バケット名
  vpc_endpoint_ecr_dkr_name                = "ecr-dkr-${var.env}-${var.project_name}"            # ecr_dkr_vpcエンドポイント名
  vpc_endpoint_ecr_api_name                = "ecr-api-${var.env}-${var.project_name}"            # ecr_api_vpcエンドポイント名
  vpc_endpoint_s3_name                     = "s3-${var.env}-${var.project_name}"                 # s3_vpcエンドポイント名
  vpc_endpoint_cloudwatch_name             = "cloudwatch-${var.env}-${var.project_name}"         # cloudwatch_vpcエンドポイント名
  vpc_endpoint_secretsmanager_name         = "secretsmanager-${var.env}-${var.project_name}"     # secretsmanager_vpcエンドポイント名
  vpc_endpoint_ecr_dkr_service_name        = "com.amazonaws.${var.aws_region[0]}.ecr.dkr"        # ecr_dkr_vpcエンドポイントサービス名 
  vpc_endpoint_ecr_api_service_name        = "com.amazonaws.${var.aws_region[0]}.ecr.api"        # ecr_api_vpcエンドポイントサービス名 
  vpc_endpoint_s3_service_name             = "com.amazonaws.${var.aws_region[0]}.s3"             # s3_vpcエンドポイントサービス名 
  vpc_endpoint_cloudwatch_service_name     = "com.amazonaws.${var.aws_region[0]}.logs"           # cloudwatch_vpcエンドポイントサービス名
  vpc_endpoint_secretsmanager_service_name = "com.amazonaws.${var.aws_region[0]}.secretsmanager" # secretsmanager_vpcエンドポイントサービス名
  route_table_public_name                  = "${var.env}-${var.project_name}-public_route_table" # public用ルートテーブル
  cf_acm_certificate_name                  = "${var.env}-${var.project_name}-cf"                 # cloudfront用acm証明書名前
}