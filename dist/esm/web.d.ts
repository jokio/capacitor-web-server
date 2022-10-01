import { WebPlugin } from '@capacitor/core';
import type { JokWebServerPlugin } from './definitions';
export declare class JokWebServerWeb extends WebPlugin implements JokWebServerPlugin {
    getIpAddress(): Promise<{
        ipAddress: string;
    }>;
    start(_: {
        publicFolderPath?: string | undefined;
        hostname?: string | undefined;
        port?: number | undefined;
    }): Promise<boolean>;
    stop(): Promise<void>;
    onRequest(_: {
        headers: Record<string, string>;
        method: string;
        path: string;
        query: Record<string, string>;
        body: string;
    }): Promise<Object>;
}
