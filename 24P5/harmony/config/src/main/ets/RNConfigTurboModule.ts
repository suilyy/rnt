import { TurboModule, TurboModuleContext } from '@rnoh/react-native-openharmony/ts';
import { TM } from "@rnoh/react-native-openharmony/generated/ts"

export class RNConfigTurboModule extends TurboModule implements TM.ConfigNativeModule.Spec {
  constructor(protected ctx: TurboModuleContext) {
    super(ctx);
  }

  getConstants(): Object {

    let result = {}
    try {
      console.log('begin get buildConfig contents')
      import('../../../BuildConfig').then(
        BuildConfig => {
           let columns: string[] = Object.keys(BuildConfig.BuildConfig)
          columns.forEach((name) => {
            result[name] = Reflect.get(BuildConfig.BuildConfig, name)
          })
        });
    } catch {
      console.log('RNConfigTurboModule: Could not find BuildConfig class');
    }
    return result;
  };
}
