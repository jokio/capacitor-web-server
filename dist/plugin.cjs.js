'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@capacitor/core');

const JokWebServer = core.registerPlugin('JokWebServer', {
    web: () => Promise.resolve().then(function () { return web; }).then(m => new m.JokWebServerWeb()),
});

class JokWebServerWeb extends core.WebPlugin {
    start(_) {
        throw new Error('Method not implemented.');
    }
    stop() {
        throw new Error('Method not implemented.');
    }
    onRequest(_) {
        throw new Error('Method not implemented.');
    }
    sendResponse(_) {
        throw new Error('Method not implemented.');
    }
}

var web = /*#__PURE__*/Object.freeze({
    __proto__: null,
    JokWebServerWeb: JokWebServerWeb
});

exports.JokWebServer = JokWebServer;
//# sourceMappingURL=plugin.cjs.js.map
