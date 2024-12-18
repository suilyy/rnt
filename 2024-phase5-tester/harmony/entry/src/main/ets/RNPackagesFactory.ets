import type {RNPackageContext, RNPackage} from '@rnoh/react-native-openharmony/ts';
import { DocViewPackage } from "@react-native-oh-tpl/react-native-doc-viewer/ts";
// import {RNAlipayPackage} from '@react-native-oh-tpl/react-native-alipay/ts';
// import { RNConfigPackage } from '@react-native-oh-tpl/react-native-config/ts';
// import {RNIdleTimerPackage}  from '@react-native-oh-tpl/react-native-idle-timer/ts';
import { RNCImageCapInsetsPackage } from '@react-native-oh-tpl/react-native-image-capinsets-next/ts';
// import { RNThumbnailPackage } from '@react-native-oh-tpl/react-native-thumbnail/ts';
// import { ImagePickerViewPackage } from '@react-native-oh-tpl/react-native-image-picker/ts';
import { RNTextinputMaxlengthFixedPackage } from "@react-native-oh-tpl/react-native-textinput-maxlength-fixed/ts";
import { RNCVideoPackage } from '@react-native-oh-tpl/react-native-video/ts';
import { GestureHandlerPackage } from '@react-native-oh-tpl/react-native-gesture-handler/ts';
import { ReanimatedPackage } from '@react-native-oh-tpl/react-native-reanimated/ts';
import {RNSkiaPackage} from '@react-native-oh-tpl/react-native-skia/ts';


export function createRNPackages(ctx: RNPackageContext): RNPackage[] {
  return [
    new DocViewPackage(ctx),
    // new RNAlipayPackage(ctx),
    // new RNConfigPackage(ctx),
    // new RNIdleTimerPackage(ctx),
    new RNCImageCapInsetsPackage(ctx),
    // new RNThumbnailPackage(ctx),
    // new ImagePickerViewPackage(ctx),
    new RNTextinputMaxlengthFixedPackage(ctx),
    new RNCVideoPackage(ctx),
    new GestureHandlerPackage(ctx),
    new ReanimatedPackage(ctx),
    new RNSkiaPackage(ctx)
  ];
}
