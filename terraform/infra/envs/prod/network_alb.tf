module "alb" {
  source = "../../modules/alb"

  vpc_id             = module.vpc.id
  alb_name           = local.name
  alb_target_name    = local.alb_target_name
  protocol           = "HTTP"
  port               = 80
  internal           = false
  security_group_ids = [module.security_group.id]
  subnet_ids         = [for subnet in module.public_subnet : subnet.id]
}