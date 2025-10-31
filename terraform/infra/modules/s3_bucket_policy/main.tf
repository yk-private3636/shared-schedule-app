resource "aws_s3_bucket_policy" "main" {
    bucket = var.bucket_id
    policy = data.aws_iam_policy_document.main.json
}

data "aws_iam_policy_document" "main" {
  statement {
    effect = "Allow"
    
    principals {
      type        = var.principal_type
      identifiers = [var.principal_identifier]
    }

    actions = var.actions

    resources = [
      var.bucket_arn,
      "${var.bucket_arn}/*",
    ]

    condition {
      test = var.condition.test
      variable = var.condition.variable
      values = var.condition.values
    }
  }
}