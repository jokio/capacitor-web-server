import { WebPlugin } from '@capacitor/core'

import type { JokWebServerPlugin } from './definitions'

export class JokWebServerWeb
  extends WebPlugin
  implements JokWebServerPlugin
{
  start(_: {
    publicFolderPath?: string | undefined
    hostname?: string | undefined
    port?: number | undefined
  }): Promise<boolean> {
    throw new Error('Method not implemented.')
  }
  stop(): Promise<void> {
    throw new Error('Method not implemented.')
  }
  onRequest(
    _: (props: {
      requestId: string
      headers: Record<string, string>
      method: string
      path: string
      query: Record<string, string>
      body: string
    }) => void
  ): Promise<void> {
    throw new Error('Method not implemented.')
  }
  sendResponse(_: {
    requestId: string
    status: number
    body: string
    headers: Record<string, string>
  }): Promise<void> {
    throw new Error('Method not implemented.')
  }
}
