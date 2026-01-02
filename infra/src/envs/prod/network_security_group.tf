module "alb_security_group" {
  source = "../../modules/security_group"

  name   = local.security_group_alb_name
  vpc_id = module.vpc.id

  # TODO: TLS化したら削除する
  ingress = [{
    from_port        = 80
    to_port          = 80
    protocol         = "tcp"
    cidr_blocks      = ["0.0.0.0/0"]
    ipv6_cidr_blocks = ["::/0"]
  }]

  egress = [{
    from_port        = 8080
    to_port          = 8080
    protocol         = "tcp"
    cidr_blocks      = ["0.0.0.0/0"]
    ipv6_cidr_blocks = ["::/0"]
  }]
}

module "ecs_security_group" {
  source = "../../modules/security_group"

  name   = local.security_group_ecs_name
  vpc_id = module.vpc.id

  ingress = [{
    from_port        = 8080
    to_port          = 8080
    protocol         = "tcp"
    cidr_blocks      = ["0.0.0.0/0"]
    ipv6_cidr_blocks = ["::/0"]
  }]

  egress = [{
    from_port        = 443
    to_port          = 443
    protocol         = "tcp"
    cidr_blocks      = ["0.0.0.0/0"]
    ipv6_cidr_blocks = ["::/0"]
    }, {
    from_port        = 5432
    to_port          = 5432
    protocol         = "tcp"
    cidr_blocks      = ["0.0.0.0/0"]
    ipv6_cidr_blocks = ["::/0"]
  }]
}

module "rds_security_group" {
  source = "../../modules/security_group"

  name   = local.security_group_rds_name
  vpc_id = module.vpc.id

  ingress = [{
    from_port        = 5432
    to_port          = 5432
    protocol         = "tcp"
    cidr_blocks      = ["0.0.0.0/0"]
    ipv6_cidr_blocks = ["::/0"]
  }]

  egress = []
}

module "vpc_endpoint_security_group" {
  source = "../../modules/security_group"

  name   = local.security_group_vpc_endpoint_name
  vpc_id = module.vpc.id

  ingress = [{
    from_port        = 443
    to_port          = 443
    protocol         = "tcp"
    cidr_blocks      = ["0.0.0.0/0"]
    ipv6_cidr_blocks = ["::/0"]
  }]

  egress = []
}