var capacitorJokWebServer = (function (exports, core) {
    'use strict';

    const JokWebServer = core.registerPlugin('JokWebServer', {
        web: () => Promise.resolve().then(function () { return web; }).then(m => new m.JokWebServerWeb()),
    });

    class JokWebServerWeb extends core.WebPlugin {
        getIpAddress() {
            throw new Error('Method not implemented.');
        }
        start(_) {
            throw new Error('Method not implemented.');
        }
        stop() {
            throw new Error('Method not implemented.');
        }
        onRequest(_) {
            throw new Error('Method not implemented.');
        }
    }

    var web = /*#__PURE__*/Object.freeze({
        __proto__: null,
        JokWebServerWeb: JokWebServerWeb
    });

    exports.JokWebServer = JokWebServer;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

})({}, capacitorExports);
//# sourceMappingURL=plugin.js.map
