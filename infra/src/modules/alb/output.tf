# alb ターゲットグループARN
output "target_group_arn" {
    value = aws_lb_target_group.main.arn
}

# alb DNS名
output "dns_name" {
    value = aws_lb.main.dns_name
}