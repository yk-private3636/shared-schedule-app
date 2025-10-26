resource "aws_lb" "main" {
    name = var.alb_name
    internal = var.internal
    load_balancer_type = "application"
    security_groups = var.security_group_ids
    subnets = var.subnet_ids

    enable_deletion_protection = false

    # access_logs {}

    tags = {
      Name = var.alb_name
    }
}

resource "aws_lb_target_group" "main" {
    name = var.alb_target_name
    protocol = upper(var.protocol)
    port = var.port
    vpc_id = var.vpc_id
    target_type = "ip"

    tags = {
      Name = var.alb_target_name
    }
}

resource "aws_lb_listener" "main" {
    load_balancer_arn = aws_lb.main.arn
    protocol = upper(var.protocol)
    port = var.port
    # ssl_policy = 
    # certificate_arn = 

    default_action {
        type = "forward"
        target_group_arn = aws_lb_target_group.main.arn
    }
}