import { RNAbility } from "@rnoh/react-native-openharmony";
import Want from '@ohos.app.ability.Want';
import { RNNfcManagerModule } from '@react-native-oh-tpl/react-native-nfc-manager';
import AbilityConstant from '@ohos.app.ability.AbilityConstant';
import { RNBootSplashScreen } from '@react-native-oh-tpl/react-native-bootsplash/src/main/ets/RNBootSplashScreen';
import { JPushInterface } from "@react-native-oh-tpl/jpush-react-native";
import { abilityAccessCtrl, PermissionRequestResult, Permissions } from '@kit.AbilityKit';
import { notificationManager } from '@kit.NotificationKit';
import hilog from '@ohos.hilog';
import { BusinessError } from '@kit.BasicServicesKit';

const TAG: string = 'JPUSH-JLog-RemoteNotificationExtAbility';
const permissions: Array<Permissions> = ['ohos.permission.APP_TRACKING_CONSENT'];

export default class EntryAbility extends RNAbility {
  getPagePath() {
    return "pages/Index"
  }
  
  onCreate(want: Want): void {
    super.onCreate(want);
    RNNfcManagerModule.registerAbilityEvents(this.context,'onCreate',want);
    JPushInterface.setClickWant(want)
    let context: Context = this.context;
    let atManager: abilityAccessCtrl.AtManager = abilityAccessCtrl.createAtManager();
    atManager.requestPermissionsFromUser(context, permissions).then((data: PermissionRequestResult) => {
      let grantStatus: Array<number> = data.authResults;
      let length: number = grantStatus.length;
      for (let i = 0; i < length; i++) {
        if (grantStatus[i] === 0) {
          hilog.info(0x0000, TAG, '%{public}s', 'requestPermissionsFromUser ok');
        } else {
          hilog.info(0x0000, TAG, '%{public}s', 'requestPermissionsFromUser fail');
        }
      }
      // 授权成功 然后启用推送业务功能
      JPushInterface.init(this.context)
    }).catch((err: BusinessError) => {
      //然后启用推送业务功能
      JPushInterface.init(this.context)
      hilog.error(0x0000, TAG, '%{public}s',
        `requestPermissionsFromUser failed, code is ${err.code}, message is ${err.message}`);

    })
    notificationManager.requestEnableNotification(this.context).then(() => {
      hilog.info(0x0000, TAG, '%{public}s', `requestEnableNotification success`);
    }).catch((err: BusinessError) => {
      hilog.error(0x0000, TAG, '%{public}s',
        `requestEnableNotification failed, code is ${err.code}, message is ${err.message}`);
    });
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
};
