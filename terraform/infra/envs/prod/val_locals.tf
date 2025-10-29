locals {
  name                     = "${var.env}-${var.project_name}" # 共通リソース名
  ecs_service_name         = "${var.env}-service"             # ecsサービス名
  ecs_tasks_name           = "${var.env}-tasks"               # ecsタスク名
  ecs_iam_role_name        = "${var.env}EcsRole"              # ecsロール名
  ecs_iam_role_policy_name = "${var.env}EcsRolePolicy"        # ecsポリシー名
  ecs_task_api_name        = "${var.env}-api-task"            # ecs apiタスク名
  alb_target_name          = "${var.env}-alb-target"          # alb ターゲット名
  rds_instance_name        = "${var.env}-rds-instance"        # rdsインスタンス名
  s3_bucket_name           = "${var.env}-${var.project_name}" # s3バケット名
}