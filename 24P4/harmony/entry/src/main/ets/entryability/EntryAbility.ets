import { RNAbility } from "@rnoh/react-native-openharmony";
import { PushNotificationModule } from '@react-native-ohos/push-notification-ios/ts';
import { AbilityConstant, Want } from "@kit.AbilityKit";

export default class EntryAbility extends RNAbility {
  getPagePath() {
    return "pages/Index"
  }
  onNewWant(want: Want, _launchParam: AbilityConstant.LaunchParam): void {
     PushNotificationModule.getInstance().didReceiveRemoteNotification(want);
  }
};
