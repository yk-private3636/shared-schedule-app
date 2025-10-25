locals {
  name                     = "${var.project_name}-${var.env}" # 共通リソース名
  ecs_service_name         = "${var.env}-service"             # ecsサービス名
  ecs_tasks_name           = "${var.env}-tasks"               # ecsタスク名
  ecs_iam_role_name        = "${var.env}EcsRole"              # ecsロール名
  ecs_iam_role_policy_name = "${var.env}EcsRolePolicy"        # ecsポリシー名
}