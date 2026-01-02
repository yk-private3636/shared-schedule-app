resource "aws_s3_bucket" "main" {
    bucket = var.bucket
    force_destroy = var.force_destroy

    tags = {
        Name = var.name
    }
}