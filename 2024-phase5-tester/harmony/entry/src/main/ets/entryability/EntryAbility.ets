import { RNAbility } from "@rnoh/react-native-openharmony";
// import { AbilityConstant, Want } from '@kit.AbilityKit';
// import { AFServiceCenter } from '@alipay/afservicesdk/Index'

export default class EntryAbility extends RNAbility {
  getPagePath() {
    return "pages/Index"
  }

  // onNewWant(want: Want, launchParam: AbilityConstant.LaunchParam): void {
  //   let r = AFServiceCenter.handleResponse(want);
  // }
};
