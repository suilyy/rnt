import type {RNPackageContext, RNPackage} from '@rnoh/react-native-openharmony/ts';
import { SvgPackage } from '@react-native-oh-tpl/react-native-svg/ts';
import { DocumentPickerPackage } from '@react-native-oh-tpl/react-native-document-picker/ts';
import {RNPerformancePackage} from '@react-native-oh-tpl/react-native-performance/ts'
import { RNRestartPackage } from '@react-native-oh-tpl/react-native-restart/ts';
import {SafeAreaViewPackage} from '@react-native-oh-tpl/react-native-safe-area-context/ts';
import { GestureHandlerPackage } from '@react-native-oh-tpl/react-native-gesture-handler/ts';
import { ReanimatedPackage } from '@react-native-oh-tpl/react-native-reanimated/ts';
import { ViewPagerPackage } from '@react-native-oh-tpl/react-native-pager-view/ts';
import {ContextMenuPackage} from '@react-native-oh-tpl/react-native-context-menu-view/ts';
import { ShakePackage } from "@react-native-oh-tpl/react-native-shake/ts";
import {NetInfoPackage} from '@react-native-oh-tpl/netinfo/ts';
import { RTNCameraKitPackage } from "@react-native-oh-tpl/react-native-camera-kit/ts";
import { RNKeepAwakePackage } from "@react-native-oh-tpl/react-native-keep-awake/ts";
import { RNOrientationPackage } from '@react-native-oh-tpl/react-native-orientation/ts';
import { RandomBytesPackage } from '@react-native-oh-tpl/react-native-randombytes/ts';
import { BackgroundTimerTurboModulePackage } from '@react-native-oh-tpl/react-native-background-timer/ts';
import {ContactsPackage} from '@react-native-oh-tpl/react-native-contacts/ts';
import { RNSpinKitPackage } from '@react-native-oh-tpl/react-native-spinkit/ts';
import { RNGetRandomValuesPackage } from "@react-native-oh-tpl/react-native-get-random-values/ts";
import {RNUnistylesPackage} from '@react-native-oh-tpl/react-native-unistyles/ts';
import {BlurhashPackage} from '@react-native-oh-tpl/react-native-blurhash/ts';
import { TouchIdPackage } from "@react-native-oh-tpl/react-native-touch-id/ts";
import {ChartsWrapperPackage} from '@react-native-oh-tpl/react-native-charts-wrapper/ts';
import { CreateThumbnailPackage } from '@react-native-oh-tpl/react-native-create-thumbnail/ts';
import { SignatureCapturePackage } from '@react-native-oh-tpl/react-native-signature-capture/ts';
import { RNFingerprintScannerPackage } from '@react-native-oh-tpl/react-native-fingerprint-scanner/ts';
import { RNHttpBridgePackage } from "@react-native-oh-tpl/react-native-http-bridge/ts";
import { RNInAppBrowserPackage } from '@react-native-oh-tpl/react-native-inappbrowser-reborn/ts';
import { PDFViewPackage } from '@react-native-oh-tpl/react-native-view-pdf/ts';
import { RNSystemSettingPackage } from '@react-native-oh-tpl/react-native-system-setting/ts';
import { RNCPickerPackage } from '@react-native-oh-tpl/picker/ts';
import { RNHapticFeedbackPackage } from '@react-native-oh-tpl/react-native-haptic-feedback/ts';
import { RNNfcManagerPackage } from '@react-native-oh-tpl/react-native-nfc-manager/ts';
import { RNTrackPlayerPackage } from "@react-native-oh-tpl/react-native-track-player/ts";
import { RNAppleAuthPackage } from '@react-native-oh-tpl/react-native-apple-authentication';
import { RNReactLocalizationPackage } from '@react-native-oh-tpl/react-native-localization';
import {RNMMKVStoragePackage} from '@react-native-oh-tpl/react-native-mmkv-storage';
import { RNTextInputMaskPackage } from '@react-native-oh-tpl/react-native-text-input-mask/ts'
import {RNPrintPackage} from '@react-native-oh-tpl/react-native-print/ts';
import {RNKeyboardControllerPackage,RNStatusBarManagerCompatPackage} from  "@react-native-oh-tpl/react-native-keyboard-controller/ts";
import {RNSkiaPackage} from '@react-native-oh-tpl/react-native-skia/ts';
import { UiLibPackage } from '@react-native-oh-tpl/react-native-ui-lib/ts';
import { ImagePickerViewPackage } from '@react-native-oh-tpl/react-native-image-picker/ts';
import { VisionCameraModulePackage } from "@react-native-oh-tpl/react-native-vision-camera/ts";
import {RNQrDecodeImageCameraPackage} from '@react-native-oh-tpl/react-native-qr-decode-image-camera/ts';
import {AsyncStoragePackage} from '@react-native-oh-tpl/async-storage/ts';
import {RNJPushPackage} from  "@react-native-oh-tpl/jpush-react-native/ts";
import {RNSharePackage} from '@react-native-oh-tpl/react-native-share/ts';
import { RNOrientationLockerPackage } from '@react-native-oh-tpl/react-native-orientation-locker/ts';

export function createRNPackages(ctx: RNPackageContext): RNPackage[] {
  return [
    new SvgPackage(ctx),
    new DocumentPickerPackage(ctx),
    new RNPerformancePackage(ctx),
    new RNRestartPackage(ctx),
    new SafeAreaViewPackage(ctx),
    new GestureHandlerPackage(ctx),
    new ReanimatedPackage(ctx),
    new ViewPagerPackage(ctx),
    new ContextMenuPackage(ctx),
    new ShakePackage(ctx),
	new NetInfoPackage(ctx),
    new RTNCameraKitPackage(ctx),
	new RNKeepAwakePackage(ctx),
	new RNOrientationPackage(ctx),
	new RandomBytesPackage(ctx),
	new BackgroundTimerTurboModulePackage(ctx),
	new ContactsPackage(ctx),
	new RNSpinKitPackage(ctx),
	new RNGetRandomValuesPackage(ctx),
	new RNUnistylesPackage(ctx),
	new BlurhashPackage(ctx),
	new TouchIdPackage(ctx),
	new ChartsWrapperPackage(ctx),
	new CreateThumbnailPackage(ctx),
	new SignatureCapturePackage(ctx),
	new RNFingerprintScannerPackage(ctx),
	new RNHttpBridgePackage(ctx),
	new RNInAppBrowserPackage(ctx),
	new PDFViewPackage(ctx),
	new RNSystemSettingPackage(ctx),
	new RNCPickerPackage(ctx),
	new RNHapticFeedbackPackage(ctx),
	new RNNfcManagerPackage(ctx),
	new RNTrackPlayerPackage(ctx),
	new RNAppleAuthPackage(ctx),
	new RNReactLocalizationPackage(ctx),
	new RNMMKVStoragePackage(ctx),
	new RNTextInputMaskPackage(ctx),
	new RNPrintPackage(ctx),
	new RNKeyboardControllerPackage(ctx),
    new RNStatusBarManagerCompatPackage(ctx),
	new RNSkiaPackage(ctx),
	new UiLibPackage(ctx),
	new ImagePickerViewPackage(ctx),
    new VisionCameraModulePackage(ctx),
	new RNQrDecodeImageCameraPackage(ctx),
	new AsyncStoragePackage(ctx),
	new RNJPushPackage(ctx),
	new RNSharePackage(ctx),
	new RNOrientationLockerPackage(ctx)
  ];
}
