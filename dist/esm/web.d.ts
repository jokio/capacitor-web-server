import { WebPlugin } from '@capacitor/core';
import type { JokWebServerPlugin } from './definitions';
export declare class JokWebServerWeb extends WebPlugin implements JokWebServerPlugin {
    start(_: {
        publicFolderPath?: string | undefined;
        hostname?: string | undefined;
        port?: number | undefined;
    }): Promise<boolean>;
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
