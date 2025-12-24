import { Controller, Get } from "@nestjs/common";
import { Public } from "@/authz/authz.module";

@Controller("/api/v1/health")
export class HealthController {
  @Public()
  @Get()
  check() {
    return {
      text: "health check ok",
    };
  }
}
