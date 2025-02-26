import { harTasks ,OhosHarContext,OhosPluginId, OhosProjectContext} from '@ohos/hvigor-ohos-plugin';
import { hvigor, HvigorNode, HvigorPlugin } from '@ohos/hvigor';

import * as fs from 'fs';
import * as path from 'path';

function loadEnvFileToMap(fileName: string): Map<string, string> {
  if (fs.existsSync(fileName)) {
    const envFilePath = path.resolve(__dirname, fileName);
    const envFileContent = fs.readFileSync(envFilePath, 'utf8');
    const configMap = new Map<string, string>();
    envFileContent.split('\n').forEach(line => {
      const trimmedLine = line.trim();
      if (trimmedLine && !trimmedLine.startsWith('#')) {
        const [key, value] = trimmedLine.split('=');
        if (key && value != undefined) {
          configMap.set(key.trim(), value.trim());
        }
      }
    });
    return configMap;
  }else {
    console.log("**************************")
    console.log("*** Missing .env file ****")
    console.log("**************************")
    return [];
  }
}

// 生成配置类的 TypeScript 文件
function generateConfigClass(config: Map<string, string>) {
  const className = 'BuildConfig';
  const classFilePath = path.resolve(__dirname, `${className}.ts`);
  const classContent = `
    export class ${className} {
      ${Array.from(config.entries())
    .map(([key, value]) => `public static readonly ${key}: string = "${value}";`)
    .join('\n')}
    }
  `;
  fs.writeFileSync(classFilePath, classContent.trim());
  console.log(`Generated ${className}.ts with config`);
}

export function defineBuildConfig() {
  return {
    pluginId: 'BuildConfigTaskID',
    apply(pluginContext) {
      pluginContext.registerTask({
        name: 'defineBuildConfig',
        run: (taskContext) => {
          const conPath = path.dirname(process.cwd())
          const node = hvigor.getRootNode();
          const appContext = node.getContext(OhosPluginId.OHOS_APP_PLUGIN) as OhosAppContext;
          const buildMode =  appContext.getBuildMode()
          const extParams = hvigor.getParameter().getExtParams();
          let configFile = ".env"
          try{
            configFile = appContext.getBuildProfileOpt().app.products[0].buildOption.arkOptions.buildProfileFields[buildMode]
          }catch{
            console.log('buildProfileFields is not find buildMode');
          }
          if (process.env.ENVFILE) {
            configFile = process.env.ENVFILE;
          }
          console.log(configFile);
          console.log(conPath + '\\' + configFile);

          generateConfigClass(loadEnvFileToMap(conPath + '\\' + configFile));
        },

        dependencies: ['default@PreBuild'],
        postDependencies: ['default@ConfigureCmake']
      })
    }
  }
}

export default {
  system: harTasks, /* Built-in plugin of Hvigor. It cannot be modified. */
  plugins: [defineBuildConfig()]         /* Custom plugin to extend the functionality of Hvigor. */
}
