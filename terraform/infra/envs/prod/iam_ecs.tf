module "ecs_iam" {
  source = "../../modules/iam_ecs"

  iam_role_name        = local.ecs_iam_role_name
  iam_role_policy_name = local.ecs_iam_role_policy_name
}