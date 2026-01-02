resource "aws_nat_gateway" "main" {
    connectivity_type = var.connectivity_type
    allocation_id = var.connectivity_type == "public" ? var.eip_allocation_id : null
    
    subnet_id     = var.subnet_id
    
    tags = {
        Name = var.name
    }
}