export interface JokWebServerPlugin {
  getIpAddresses(): Promise<
    {
      type: string;
      ipAddress: string;
    }[]
  >;

  start(props: {
    /**
     * @default /public
     */
    publicFolderPath?: string;

    /**
     * @default 0.0.0.0
     */
    hostname?: string;

    /**
     * @default 8080
     */
    port?: number;
  }): Promise<boolean>;

  stop(): Promise<void>;

  onRequest(props: {
    headers: Record<string, string>;
    method: string;
    path: string;
    query: Record<string, string>;
    body: string;
  }): Promise<Object>;
}
