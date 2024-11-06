import { RNAbility } from "@rnoh/react-native-openharmony";
import Want from '@ohos.app.ability.Want';
import { RNNfcManagerModule } from '@react-native-oh-tpl/react-native-nfc-manager';
import AbilityConstant from '@ohos.app.ability.AbilityConstant';
import { window } from '@kit.ArkUI';
import { RNBootSplashScreen } from '@react-native-oh-tpl/react-native-bootsplash/src/main/ets/RNBootSplashScreen';

export default class EntryAbility extends RNAbility {
  getPagePath() {
    return "pages/Index"
  }
  
  onCreate(want: Want): void {
    super.onCreate(want);
    RNNfcManagerModule.registerAbilityEvents(this.context,'onCreate',want);
  }

  onForeground(): void {
    super.onForeground();
  }

  onBackground(): void {
    super.onBackground();
  }

  onNewWant(want: Want, launchParam: AbilityConstant.LaunchParam): void {
    super.onNewWant(want,launchParam);
    RNNfcManagerModule.registerAbilityEvents(this.context,'onNewWant',want);
  }

  onDestroy(): void {
    super.onDestroy();
    RNNfcManagerModule.unRegisterAbilityEvents(this.context);
  }
  
   onWindowStageCreate(windowStage: window.WindowStage) {
    RNBootSplashScreen.init(this.context, windowStage).then(() => {
      super.onWindowStageCreate(windowStage);
    })
  }
};
