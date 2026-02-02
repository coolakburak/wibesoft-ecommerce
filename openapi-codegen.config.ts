declare module "@7nohe/openapi-react-query-codegen" {
  export interface ApiConfig {
    schemaPath: string;
    outputDir: string;
    label: string;
  }

  export interface Config {
    apiConfigs: ApiConfig[];
  }

  export function defineConfig(config: Config): Config;
}
