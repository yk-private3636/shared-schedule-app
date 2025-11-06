module "ecs_iam" {
  source = "../../modules/iam_ecs"

  iam_role_task_execution_name                       = local.ecs_iam_role_task_execution_name
  iam_role_policy_task_execution_name = local.ecs_iam_role_policy_task_execution_name

  iam_role_task_name                       = local.ecs_iam_role_task_name
  iam_role_policy_ssmmessage_name     = local.ecs_iam_role_policy_ssmmessage_name
}