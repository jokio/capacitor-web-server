import { WebPlugin } from '@capacitor/core';

import type { JokWebServerPlugin } from './definitions';

export class JokWebServerWeb extends WebPlugin implements JokWebServerPlugin {
  getIpAddresses(): Promise<{ type: string; ipAddress: string }[]> {
    throw new Error('Method not implemented.');
  }

  start(props: {
    publicFolderPath?: string | undefined;
    hostname?: string | undefined;
    port?: number | undefined;
  }): Promise<boolean> {
    throw new Error('Method not implemented.');
  }

  stop(): Promise<void> {
    throw new Error('Method not implemented.');
  }

  onRequest(props: {
    headers: Record<string, string>;
    method: string;
    path: string;
    query: Record<string, string>;
    body: string;
  }): Promise<Object> {
    throw new Error('Method not implemented.');
  }
}
