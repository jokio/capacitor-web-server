import { WebPlugin } from '@capacitor/core'

import type { JokWebServerPlugin } from './definitions'

export class JokWebServerWeb
  extends WebPlugin
  implements JokWebServerPlugin
{
  getIpAddress(): Promise<{ ipAddress: string }> {
    throw new Error('Method not implemented.')
  }
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
  onRequest(_: {
    headers: Record<string, string>
    method: string
    path: string
    query: Record<string, string>
    body: string
  }): Promise<Object> {
    throw new Error('Method not implemented.')
  }
}
