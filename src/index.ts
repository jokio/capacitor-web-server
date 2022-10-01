import { registerPlugin } from '@capacitor/core';

import type { JokWebServerPlugin } from './definitions';

const JokWebServer = registerPlugin<JokWebServerPlugin>('JokWebServer', {
  web: () => import('./web').then(m => new m.JokWebServerWeb()),
});

export * from './definitions';
export { JokWebServer };
