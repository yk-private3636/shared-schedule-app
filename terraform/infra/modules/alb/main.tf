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
    health_check {
      enabled = true
      protocol = var.health_check.protocol
      port = var.health_check.port
      path = var.health_check.path
      matcher = var.health_check.matcher
      interval = var.health_check.interval
      timeout = var.health_check.timeout
      healthy_threshold = var.health_check.healthy_threshold
      unhealthy_threshold = var.health_check.unhealthy_threshold
    }

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