export interface JokWebServerPlugin {
  start(props: {
    /**
     * @default /public
     */
    publicFolderPath?: string

    /**
     * @default 0.0.0.0
     */
    hostname?: string

    /**
     * @default 8080
     */
    port?: number
  }): Promise<boolean>

  stop(): Promise<void>

  onRequest(
    callback: (props: {
      requestId: string
      headers: Record<string, string>
      method: string
      path: string
      query: Record<string, string>
      body: string
    }) => void
  ): Promise<void>

  sendResponse(props: {
    requestId: string
    status: number
    body: string
    headers: Record<string, string>
  }): Promise<void>
}
