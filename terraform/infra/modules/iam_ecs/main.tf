resource "aws_iam_role" "task_execution" {
    name = var.iam_role_task_execution_name
    assume_role_policy = data.aws_iam_policy_document.ecs_task_trust.json # ecsにロールを引き受け
}

resource "aws_iam_role" "task" {
    name = var.iam_role_task_name
    assume_role_policy = data.aws_iam_policy_document.ecs_task_trust.json # ecsにロールを引き受け
}

# インラインポリシー
resource "aws_iam_role_policy" "main" {
    name = var.iam_role_policy_task_execution_name
    role = aws_iam_role.task_execution.id
    policy = data.aws_iam_policy_document.ecs_task_execution.json
}

resource "aws_iam_role_policy" "ecs_task_role_ssmmessages" {
    name        = var.iam_role_policy_ssmmessage_name
    role       = aws_iam_role.task.id
    policy     = data.aws_iam_policy_document.ecs_task_role_ssmmessages.json
}

# ecsにポリシーを割り当てを許可
data "aws_iam_policy_document" "ecs_task_trust" {
  statement {
    actions = ["sts:AssumeRole"]

    principals {
      type        = "Service"
      identifiers = ["ecs-tasks.amazonaws.com"]
    }
  }
}

data "aws_iam_policy_document" "ecs_task_role_ssmmessages" {
  statement {
    actions = [
      "ssmmessages:CreateControlChannel",
      "ssmmessages:CreateDataChannel",
      "ssmmessages:OpenControlChannel",
      "ssmmessages:OpenDataChannel"
    ]
    resources = ["*"]
  }
}

# ecsのタスク実行policy内容
data "aws_iam_policy_document" "ecs_task_execution" {
  
  statement {
    effect = "Allow"
    actions = [
      "ecr:GetAuthorizationToken",
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