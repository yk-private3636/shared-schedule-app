locals {
  name                                     = "${var.env}-${var.project_name}"                       # 共通リソース名
  ecs_service_name                         = "${var.env}-service"                                   # ecsサービス名
  ecs_tasks_name                           = "${var.env}-tasks"                                     # ecsタスク名
  ecs_iam_role_task_execution_name         = "${var.project_name}-ecs-task-execution-role"          # ecsタスク実行ロール名
  ecs_iam_role_policy_task_execution_name  = "${var.project_name}-ecs-task-execution-role-policy"   # ecsポリシー名
  ecs_iam_role_task_name                   = "${var.project_name}-ecs-task-role"                    # ecsタスクロール名
  ecs_iam_role_policy_ssmmessage_name      = "${var.project_name}-ecs-task-ssmmessages-role-policy" # ecs ssmmessageポリシー名
  ecs_task_api_name                        = "${var.env}-api-task"                                  # ecs apiタスク名
  alb_target_name                          = "${var.env}-alb-target"                                # alb ターゲット名
  rds_instance_name                        = "${var.env}-rds-instance"                              # rdsインスタンス名
  rds_subnet_group_name                    = "${local.name}-rds-subnet-group"                       # rdsサブネットグループ名
  s3_bucket_name                           = "${var.env}-${var.project_name}"                       # s3バケット名
  vpc_endpoint_ecr_dkr_name                = "ecr-dkr-${local.name}"                                # ecr_dkr_vpcエンドポイント名
  vpc_endpoint_ecr_api_name                = "ecr-api-${local.name}"                                # ecr_api_vpcエンドポイント名
  vpc_endpoint_s3_name                     = "s3-${local.name}"                                     # s3_vpcエンドポイント名
  vpc_endpoint_cloudwatch_name             = "cloudwatch-${local.name}"                             # cloudwatch_vpcエンドポイント名
  vpc_endpoint_secretsmanager_name         = "secretsmanager-${local.name}"                         # secretsmanager_vpcエンドポイント名
  vpc_endpoint_ecr_dkr_service_name        = "com.amazonaws.${var.aws_region[0]}.ecr.dkr"           # ecr_dkr_vpcエンドポイントサービス名 
  vpc_endpoint_ecr_api_service_name        = "com.amazonaws.${var.aws_region[0]}.ecr.api"           # ecr_api_vpcエンドポイントサービス名 
  vpc_endpoint_s3_service_name             = "com.amazonaws.${var.aws_region[0]}.s3"                # s3_vpcエンドポイントサービス名 
  vpc_endpoint_cloudwatch_service_name     = "com.amazonaws.${var.aws_region[0]}.logs"              # cloudwatch_vpcエンドポイントサービス名
  vpc_endpoint_secretsmanager_service_name = "com.amazonaws.${var.aws_region[0]}.secretsmanager"    # secretsmanager_vpcエンドポイントサービス名
  route_table_public_name                  = "${var.env}-${var.project_name}-public_route_table"    # public用ルートテーブル
  route_table_private_name                 = "${var.env}-${var.project_name}-private_route_table"   # private用ルートテーブル
  cf_acm_certificate_name                  = "${var.env}-${var.project_name}-cf"                    # cloudfront用acm証明書名前
  secrets_rds_writer_connection_name       = "${local.name}-rds-writer-connection"                  # rds writer接続情報シークレット名
  secrets_rds_reader_connection_name       = "${local.name}-rds-reader-connection"                  # rds reader接続情報シークレット名
  cloudwatch_ecr_api_log_group_name        = "/aws/ecs/${var.env}/${var.project_name}/api"          # apiコンテナ用cloudwatchロググループ名
  ngw_eip_name                             = "${local.name}-ngw-eip"                                # nat gateway用eip名前
  security_group_alb_name                  = "${local.name}-alb"                                    # albセキュリティグループ名
  security_group_ecs_name                  = "${local.name}-ecs"                                    # ecsセキュリティグループ名
  security_group_rds_name                  = "${local.name}-rds"                                    # rdsセキュリティグループ名
  security_group_vpc_endpoint_name         = "${local.name}-vpc-endpoint"                           # vpcエンドポイントセキュリティグループ名

  auth0_spa_client_name = "${local.name}-spa-client"    # auth0 spaクライアント名
  auth0_api_name        = "${local.name}-api"           # auth0 apiリソース名
  auth0_api_origin      = "https://${var.auth0_domain}" # auth0 apiリソースオリジンURL

  api_endpoint = "http://${module.alb.dns_name}"                         # api エンドポイントURL
  web_endpoint = "https://${module.cloudfront_distribution.domain_name}" # web エンドポイントURL
}