import type {RNPackageContext, RNPackage} from '@rnoh/react-native-openharmony/ts';
import { WechatLibPackage } from '@react-native-ohos/react-native-wechat-lib/ts';
import { ImagePickerViewPackage } from '@react-native-oh-tpl/react-native-image-picker/ts';


export function createRNPackages(ctx: RNPackageContext): RNPackage[] {
  return [
    new WechatLibPackage(ctx),
	new ImagePickerViewPackage(ctx)
  ];
}
