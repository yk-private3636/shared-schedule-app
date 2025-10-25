resource "aws_iam_role" "main" {
    name = var.iam_role_name
    assume_role_policy = data.aws_iam_policy_document.ecs_task_trust.json # ecsにロールを引き受け
}

# インラインポリシー
resource "aws_iam_role_policy" "main" {
    name = var.iam_role_policy_name
    role = aws_iam_role.main.id
    policy = data.aws_iam_policy_document.ecs_task_execution.json

}

# 引き受けをecsに指定
data "aws_iam_policy_document" "ecs_task_trust" {
  statement {
    actions = ["sts:AssumeRole"]

    principals {
      type        = "Service"
      identifiers = ["ecs-tasks.amazonaws.com"]
    }
  }
}

# ecsのpolicy内容
data "aws_iam_policy_document" "ecs_task_execution" {
  statement {
    effect = "Allow"
    actions = [
      "ecr:GetAuthorizationToken",
    ]
    resources = ["*"]
  }

  statement {
    effect = "Allow"
    actions = [
      "ecr:BatchGetImage",
      "ecr:GetDownloadUrlForLayer",
    ]
    resources = ["*"]
  }

  statement {
    effect = "Allow"
    actions = [
      "s3:GetObject",
    ]

    resources = ["arn:aws:s3:::prod-ap-northeast-1-starport-layer-bucket/*"]
  }

  statement {
    effect = "Allow"
    actions = [
      "secretsmanager:GetSecretValue",
      "secretsmanager:DescribeSecret"
    ]
    resources = ["*"]
  }

  statement {
    effect = "Allow"
    actions = [
        "logs:CreateLogGroup",
        "logs:CreateLogStream",
        "logs:PutLogEvents",
        "logs:DescribeLogStreams"
    ]
    resources = ["arn:aws:logs:*:*:*"]
  }
}