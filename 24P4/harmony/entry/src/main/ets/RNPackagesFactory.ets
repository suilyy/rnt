import type { RNPackage, RNPackageContext } from '@rnoh/react-native-openharmony/ts';
import { SvgPackage } from '@react-native-oh-tpl/react-native-svg/ts';
import { AsyncStoragePackage } from '@react-native-oh-tpl/async-storage/ts';
import { ImagePickerViewPackage } from '@react-native-oh-tpl/react-native-image-picker/ts';
import { GeoLocationPackage } from '@react-native-oh-tpl/geolocation/ts';
import { ClipboardPackage } from '@react-native-oh-tpl/clipboard/ts';
import { ViewShotPackage } from '@react-native-oh-tpl/react-native-view-shot/ts';
import { FsPackage } from '@react-native-oh-tpl/react-native-fs/ts';
import { PermissionsPackage } from '@react-native-oh-tpl/react-native-permissions/ts';
import { CookiesPackage } from '@react-native-oh-tpl/cookies/ts';
import { WebViewPackage } from '@react-native-oh-tpl/react-native-webview/ts';
import { RNCVideoPackage } from '@react-native-oh-tpl/react-native-video/ts';
import { DocumentPickerPackage } from '@react-native-oh-tpl/react-native-document-picker/ts';
import { ReanimatedPackage } from '@react-native-oh-tpl/react-native-reanimated/ts';
import { SoundPackage } from '@react-native-oh-tpl/react-native-sound/ts';
import { RNTextSizePackage } from '@react-native-oh-tpl/react-native-text-size/ts';
import { PushNotificationPackage } from '@react-native-oh-tpl/push-notification-ios/ts';
import { RNCPickerPackage } from '@react-native-oh-tpl/picker/ts';
import { ViewPagerPackage } from '@react-native-oh-tpl/react-native-pager-view/ts';
import { RNVideoCachePackage } from '@react-native-oh-tpl/react-native-video-cache/ts';
import { CameraRollPackage } from '@react-native-oh-tpl/camera-roll/ts';
import { BlobUtilPackage } from '@react-native-oh-tpl/react-native-blob-util/ts';
import { NetInfoPackage } from '@react-native-oh-tpl/netinfo/ts';
import { PickerViewPackage } from '@react-native-oh-tpl/react-native-picker/ts';
import { SafeAreaViewPackage } from '@react-native-oh-tpl/react-native-safe-area-context/ts';
import { ExceptionHandlerPackage } from '@react-native-oh-tpl/react-native-exception-handler/ts';
import { GestureHandlerPackage } from '@react-native-oh-tpl/react-native-gesture-handler/ts';
import { RNDatePickerPackage } from '@react-native-oh-tpl/react-native-date-picker/ts';
import { RNCCheckBoxPackage } from '@react-native-ohos/checkbox/ts';
import {MapsPackage} from '@react-native-oh-tpl/react-native-maps/ts';
import { DocumentPickerPackage } from '@react-native-ohos/react-native-document-picker/ts';

export function createRNPackages(ctx: RNPackageContext): RNPackage[] {
  return [new SvgPackage(ctx),
    new ImagePickerViewPackage(ctx),
    new GeoLocationPackage(ctx),
    new FsPackage(ctx),
    new ViewShotPackage(ctx),
    new CookiesPackage(ctx),
    new AsyncStoragePackage(ctx),
    new PermissionsPackage(ctx),
    new RNVideoCachePackage(ctx),
    new CameraRollPackage(ctx),
    new WebViewPackage(ctx),
    new RNCVideoPackage(ctx),
    new DocumentPickerPackage(ctx),
    new ClipboardPackage(ctx),
    new ReanimatedPackage(ctx),
    new SoundPackage(ctx),
    new RNTextSizePackage(ctx),
    new PushNotificationPackage(ctx),
    new RNCPickerPackage(ctx),
    new ViewPagerPackage(ctx),
    new NetInfoPackage(ctx),
    new SafeAreaViewPackage(ctx),
    new PickerViewPackage(ctx),
    new BlobUtilPackage(ctx),
    new ExceptionHandlerPackage(ctx),
    new GestureHandlerPackage(ctx),
    new RNDatePickerPackage(ctx),
    new RNCCheckBoxPackage(ctx),
    new MapsPackage(ctx),
    new DocumentPickerPackage(ctx)
  ];
}
