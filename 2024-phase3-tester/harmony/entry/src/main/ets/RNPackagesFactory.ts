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
    new RNImageColorsPackage(ctx),
    new TcpSocketPackage(ctx),
    new BlePackage(ctx),
    new RNScreenShotPreventPackage(ctx),
    new RNCompassHeadingPackage(ctx),
    new RNLocalizationSettingsPackage(ctx)
	];
}
