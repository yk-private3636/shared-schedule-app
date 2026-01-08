module "alb" {
  source = "../../modules/alb"

  vpc_id             = module.vpc.id
  alb_name           = local.name
  alb_target_name    = local.alb_target_name
  lisen_protocol     = "HTTP"
  lisen_port         = 80
  target_protocol    = "HTTP"
  target_port        = 8080
  internal           = false
  security_group_ids = [module.alb_security_group.id]
  subnet_ids         = [for subnet in module.public_subnet : subnet.id]
  health_check = {
    protocol            = "HTTP"
    port                = "8080"
    path                = "/api/v1/health"
    matcher             = "200"
    interval            = 30
    timeout             = 8
    healthy_threshold   = 2
    unhealthy_threshold = 2
  }
}