# vpc id
output "id" {
    value = aws_vpc.main.id
}

# cidr block
output "cidr_block" {
    value = aws_vpc.main.cidr_block
}