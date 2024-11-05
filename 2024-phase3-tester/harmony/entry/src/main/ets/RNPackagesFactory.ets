import type {RNPackageContext, RNPackage} from '@rnoh/react-native-openharmony/ts';
import { FastImagePackage } from '@react-native-oh-tpl/react-native-fast-image/ts';
import { SvgPackage } from '@react-native-oh-tpl/react-native-svg/ts';
import { SecureRandomPackage } from '@react-native-oh-tpl/react-native-securerandom/ts';
import { WebViewPackage } from '@react-native-oh-tpl/react-native-webview/ts';
import {RNAudioRecorderPlayerPackage} from '@react-native-oh-tpl/react-native-audio-recorder-player/ts';
import { RNDefaultPreferencePackage } from '@react-native-oh-tpl/react-native-default-preference/ts';
import { VisionCameraModulePackage } from "@react-native-oh-tpl/react-native-vision-camera/ts";
import { RNFileViewerPackage } from '@react-native-oh-tpl/react-native-file-viewer/ts';
import { RNImageColorsPackage } from "@react-native-oh-tpl/react-native-image-colors/ts";
import { TcpSocketPackage } from '@react-native-oh-tpl/react-native-tcp-socket/ts';
import { BlePackage } from '@react-native-oh-tpl/react-native-ble-manager/ts';
import { RNScreenShotPreventPackage } from "@react-native-oh-tpl/react-native-screenshot-prevent/ts";
import {RNCompassHeadingPackage} from '@react-native-oh-tpl/react-native-compass-heading/ts';
import {RNLocalizationSettingsPackage} from '@react-native-oh-tpl/react-native-localization-settings/ts';
import { RNVoicePackage } from '@react-native-oh-tpl/voice/ts'
import { RNPlatformColorsPackage } from '@react-native-oh-tpl/platform-colors/ts';
import { RNFileAccessPackage } from '@react-native-oh-tpl/react-native-file-access/ts';
import {RNUdpPackage} from '@react-native-oh-tpl/react-native-udp/ts';
import { RNBackgroundFetchPackage } from "@react-native-oh-tpl/react-native-background-fetch/ts";
import {RNEmailLinkPackage} from '@react-native-oh-tpl/react-native-email-link/ts';
import { RNKeysPackage } from '@react-native-oh-tpl/react-native-keys';
import { ReanimatedPackage } from '@react-native-oh-tpl/react-native-reanimated/ts';
import { GestureHandlerPackage } from '@react-native-oh-tpl/react-native-gesture-handler/ts';
import { RNNetworkInfoPackage } from '@react-native-oh-tpl/react-native-network-info/ts';
import { RNSnackbarPackage } from '@react-native-oh-tpl/react-native-snackbar/ts';
import { RNQuickBase64Package } from '@react-native-oh-tpl/react-native-quick-base64/ts';
import { RNVersionNumberPackage } from '@react-native-oh-tpl/react-native-version-number/ts';
import { RNSensitiveInfoPackage } from '@react-native-oh-tpl/react-native-sensitive-info/ts';
import { RNTTSPackage } from '@react-native-oh-tpl/react-native-tts/ts';
import {SafeAreaViewPackage} from '@react-native-oh-tpl/react-native-safe-area-context/ts';
import { CameraRollPackage } from '@react-native-oh-tpl/camera-roll/ts';
import { ShakePackage } from "@react-native-oh-tpl/react-native-shake/ts";
import { RNImageMarkerPackage } from '@react-native-oh-tpl/react-native-image-marker/ts';
import { RNInCallManagerPackage } from '@react-native-oh-tpl/react-native-incall-manager/ts';
import { RNMlkitOcrPackage } from '@react-native-oh-tpl/react-native-mlkit-ocr/ts';
import { RNThemeControlPackage } from '@react-native-oh-tpl/react-native-theme-control/ts'
import { RNBarsPackage } from '@react-native-oh-tpl/react-native-bars/ts';
import { RNSendIntentPackage } from '@react-native-oh-tpl/react-native-send-intent/ts';

export function createRNPackages(ctx: RNPackageContext): RNPackage[] {
  return [
    new FastImagePackage(ctx),
    new SvgPackage(ctx),
    new SecureRandomPackage(ctx),
    new WebViewPackage(ctx),
    new RNAudioRecorderPlayerPackage(ctx),
    new RNDefaultPreferencePackage(ctx),
    new VisionCameraModulePackage(ctx),
    new RNFileViewerPackage(ctx),
    new RNUdpPackage(ctx),
    new RNImageColorsPackage(ctx),
    new TcpSocketPackage(ctx),
    new RNFileAccessPackage(ctx),
    new BlePackage(ctx),
    new RNScreenShotPreventPackage(ctx),
    new RNCompassHeadingPackage(ctx),
    new RNLocalizationSettingsPackage(ctx),
    new RNVoicePackage(ctx),
    new RNPlatformColorsPackage(ctx),
    new RNBackgroundFetchPackage(ctx),
    new RNEmailLinkPackage(ctx),
    new RNKeysPackage(ctx),
    new GestureHandlerPackage(ctx),
    new ReanimatedPackage(ctx),
    new RNNetworkInfoPackage(ctx),
    new RNSnackbarPackage(ctx),
    new RNQuickBase64Package(ctx),
    new RNVersionNumberPackage(ctx),
    new RNSensitiveInfoPackage(ctx),
    new RNTTSPackage(ctx),
    new SafeAreaViewPackage(ctx),
    new CameraRollPackage(ctx),
	  new ShakePackage(ctx),
    new RNImageMarkerPackage(ctx),
    new RNInCallManagerPackage(ctx),
    new RNMlkitOcrPackage(ctx),
    new RNThemeControlPackage(ctx),
    new RNBarsPackage(ctx),
    new RNSendIntentPackage(ctx)
    ];
}
