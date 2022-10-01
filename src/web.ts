import { WebPlugin } from '@capacitor/core';

import type { JokWebServerPlugin } from './definitions';

export class JokWebServerWeb extends WebPlugin implements JokWebServerPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
