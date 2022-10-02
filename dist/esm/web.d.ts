import { WebPlugin } from '@capacitor/core';
import type { JokWebServerPlugin } from './definitions';
export declare class JokWebServerWeb extends WebPlugin implements JokWebServerPlugin {
    start(_: {
        deviceName?: string | undefined;
        port?: number | undefined;
        publicFolderPath?: string | undefined;
        apiPath?: string | undefined;
    }): Promise<{
        serverUrl: string;
    }>;
    stop(): Promise<void>;
    onRequest(_: (props: {
        requestId: string;
        headers: Record<string, string>;
        method: string;
        path: string;
        query: Record<string, string>;
        body: string;
    }) => void): Promise<void>;
    sendResponse(_: {
        requestId: string;
        status: number;
        body: string;
        headers: Record<string, string>;
    }): Promise<void>;
}
