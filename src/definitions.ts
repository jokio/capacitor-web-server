export interface JokWebServerPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
