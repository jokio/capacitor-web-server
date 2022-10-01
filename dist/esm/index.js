import { registerPlugin } from '@capacitor/core';
const JokWebServer = registerPlugin('JokWebServer', {
    web: () => import('./web').then(m => new m.JokWebServerWeb()),
});
export * from './definitions';
export { JokWebServer };
//# sourceMappingURL=index.js.map