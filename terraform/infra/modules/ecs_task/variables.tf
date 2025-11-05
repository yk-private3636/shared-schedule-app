# 環境
variable "app_env" {
    type = string
}

# タスク群定義名
variable "tasks_name" {
    type = string
}

# タスク群CPU(1vCPU = 1024)
variable "tasks_cpu" {
  type = number
}

# タスク群memory(1GB = 1024)
variable "tasks_memory" {
  type = number
}

# ecsタスク実行ロールARN
variable "execution_role_arn" {
  type = string
}

# apiタスク設定
variable "api_task" {
  type = object({
    name = string # apiタスク名
    image = string # apiタスクイメージ
    cpu = number # apiタスクCPU(1vCPU = 1024)
    memory = number # apiタスクメモリ(1GB = 1024)
    port = object({
      container = number # コンテナ側
      host = number # ホスト側
    })
    environment = object({
      otel_service_name = string # OpenTelemetry apiサービス名
      otel_exporter_otlp_traces_endpoint = string # OpenTelemetry エクスポーターエンドポイント
      otel_exporter_otlp_protocol = string # OpenTelemetry エクスポータープロトコル
      auth0_issuer_url = string # JWT発行auth0 URL
      auth0_audience = string # auth0 audience
    })
    secrets = list(object({
      name = string # シークレット名
      valueFrom = string # シークレットARN
    }))
    logConfiguration = object({
      logDriver = string # ログドライバー
      options = object({
        awslogsCreateGroup = string # awslogs-create-group
        awslogsGroup = string # awslogs-group
        awslogsStreamPrefix = string # awslogs-stream-prefix
        awslogsRegion = string # awslogs-region
        mode = string # モード
      })
    })
  })
}