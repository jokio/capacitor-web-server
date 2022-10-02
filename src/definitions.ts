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
  }): Promise<boolean>

  stop(): Promise<void>

  onRequest(callback: PluginCallback): Promise<void>

  sendResponse(props: {
    requestId: string
    status: number
    body: string
    headers: Record<string, string>
  }): Promise<void>
}
