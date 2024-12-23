import { RNAbility } from "@rnoh/react-native-openharmony";
import Want from '@ohos.app.ability.Want';
import { RNThemeControlModule } from '@react-native-oh-tpl/react-native-theme-control';
export default class EntryAbility extends RNAbility {
  onCreate(want: Want): void {
    super.onCreate(want);
    RNThemeControlModule.recoverApplicationTheme(this.context);
  }

  getPagePath() {
    return "pages/Index"
  }
};
