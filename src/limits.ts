export class TokenLimits {
  maxTokens: number
  requestTokens: number
  responseTokens: number
  knowledgeCutOff: string

  constructor(model = 'gpt-4o') {
    this.knowledgeCutOff = '2021-09-01'
    switch (model) {
      case 'gpt-4':
        this.maxTokens = 8000
        this.responseTokens = 2000
        break
      case 'gpt-4-turbo':
        this.maxTokens = 128000
        this.responseTokens = 2000
        break
      case 'gpt-4o':
        this.maxTokens = 128000
        this.responseTokens = 4000
        break
      case 'gpt-4o-mini':
        this.maxTokens = 128000
        this.responseTokens = 16384
        break
      case 'o1-preview':
        this.maxTokens = 128000
        this.responseTokens = 65536
        break
      case 'o1-mini':
        this.maxTokens = 128000
        this.responseTokens = 65536
        break
      default:
        this.maxTokens = 4000
        this.responseTokens = 1000
        break
    }

    // provide some margin for the request tokens
    this.requestTokens = this.maxTokens - this.responseTokens - 100
  }

  string(): string {
    return `max_tokens=${this.maxTokens}, request_tokens=${this.requestTokens}, response_tokens=${this.responseTokens}`
  }
}
