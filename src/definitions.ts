import { PluginCallback } from '@capacitor/core'

export interface JokWebServerPlugin {
  start(props: {
    /**
     * @default "GamingCenter"
     */
    deviceName?: string

    /**
     * @default 8080
     */
    port?: number

    /**
     * @default /public
     */
    publicFolderPath?: string

    /**
     * @default /api
     */
    apiPath?: string
  }): Promise<{
    serverUrl: string
  }>

  stop(): Promise<void>

  onRequest(callback: PluginCallback): Promise<void>

  sendResponse(props: {
    requestId: string
    body: string
    status?: number
    headers?: Record<string, string>
  }): Promise<void>
}
