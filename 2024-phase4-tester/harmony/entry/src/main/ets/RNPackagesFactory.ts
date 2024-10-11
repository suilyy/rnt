import type { RNPackageContext, RNPackage } from '@rnoh/react-native-openharmony/ts';
import { SvgPackage } from '@react-native-oh-tpl/react-native-svg/ts';
import { AsyncStoragePackage } from '@react-native-oh-tpl/async-storage/ts';
import { ImagePickerViewPackage } from '@react-native-oh-tpl/react-native-image-picker/ts';
import { GeoLocationPackage } from '@react-native-oh-tpl/geolocation/ts';
import { ViewShotPackage } from '@react-native-oh-tpl/react-native-view-shot/ts';
import { FsPackage } from '@react-native-oh-tpl/react-native-fs/ts';
import { PermissionsPackage } from '@react-native-oh-tpl/react-native-permissions/ts';
import { CookiesPackage } from '@react-native-oh-tpl/cookies/ts';
import { WebViewPackage } from '@react-native-oh-tpl/react-native-webview/ts';
import { RNCVideoPackage } from '@react-native-oh-tpl/react-native-video/ts';
import { DocumentPickerPackage } from '@react-native-oh-tpl/react-native-document-picker/ts';

export function createRNPackages(ctx: RNPackageContext): RNPackage[] {
  return [new SvgPackage(ctx),
    new ImagePickerViewPackage(ctx),
    new GeoLocationPackage(ctx),
    new FsPackage(ctx),
    new ViewShotPackage(ctx),
    new CookiesPackage(ctx),
    new AsyncStoragePackage(ctx),
    new PermissionsPackage(ctx),
    new WebViewPackage(ctx),
    new RNCVideoPackage(ctx),
    new DocumentPickerPackage(ctx),
  ];
}
