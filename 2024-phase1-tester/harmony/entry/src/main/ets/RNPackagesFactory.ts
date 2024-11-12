import type {RNPackageContext, RNPackage} from '@rnoh/react-native-openharmony/ts';
import {SyanImagePickerPackage} from '@react-native-oh-tpl/react-native-syan-image-picker/ts';
import { RNCVideoPackage } from '@react-native-oh-tpl/react-native-video/ts';
import {SafeAreaViewPackage} from '@react-native-oh-tpl/react-native-safe-area-context/ts';
import {SpringScrollViewPackage} from '@react-native-oh-tpl/react-native-spring-scrollview/ts';
import { ViewPagerPackage } from '@react-native-oh-tpl/react-native-pager-view/ts';
import {LinearTextGradientPackage} from '@react-native-oh-tpl/react-native-text-gradient/ts';
import { RNLocalizePackage } from '@react-native-oh-tpl/react-native-localize/ts';
import { SmartRefreshPackage } from '@react-native-oh-tpl/react-native-smartrefreshlayout/ts';
import {ImageResizerPackage} from '@react-native-oh-tpl/react-native-image-resizer/ts';
import {SQLitePluginPackage} from '@react-native-oh-tpl/react-native-sqlite-storage/ts';
import { ImagePickerViewPackage } from '@react-native-oh-tpl/react-native-image-picker/ts';
import {ReactBindingXPackage} from '@react-native-oh-tpl/react-native-bindingx/ts';
import { GestureHandlerPackage } from '@react-native-oh-tpl/react-native-gesture-handler/ts';
import { CalendarEventPackage } from "@react-native-oh-tpl/react-native-calendar-events/ts"
import { ClipPathPackage } from '@react-native-oh-tpl/react-native-clippathview/ts';
import {FileUpLoadPackage} from '@react-native-oh-tpl/react-native-fileupload/ts';
import {ToastPackage} from '@react-native-oh-tpl/react-native-toast/ts';
import {AMapGeolocationPackage} from '@react-native-oh-tpl/react-native-amap-geolocation/ts';
import {RNDeviceInfoPackage} from '@react-native-oh-tpl/react-native-device-info/ts';
import {AMap3DPackage} from '@react-native-oh-tpl/react-native-amap3d/ts';
import {BlePlxPackage} from '@react-native-oh-tpl/react-native-ble-plx/ts';
import {BaiduMapPackage} from '@react-native-oh-tpl/react-native-baidu-map/ts';
import {AsyncStoragePackage} from '@react-native-oh-tpl/async-storage/ts';
import {SplashScreenPackage} from '@react-native-oh-tpl/react-native-splash-screen/ts';

export function createRNPackages(ctx: RNPackageContext): RNPackage[] {
  return [
    new SyanImagePickerPackage(ctx),
    new RNCVideoPackage(ctx),
    new SafeAreaViewPackage(ctx),
    new SpringScrollViewPackage(ctx),
    new ViewPagerPackage(ctx),
    new LinearTextGradientPackage(ctx),
    new RNLocalizePackage(ctx),
    new SmartRefreshPackage(ctx),
    new ImageResizerPackage(ctx),
    new SQLitePluginPackage(ctx),
    new ImagePickerViewPackage(ctx),
    new ReactBindingXPackage(ctx),
    new GestureHandlerPackage(ctx),
    new CalendarEventPackage(ctx),
    new ClipPathPackage(ctx),
    new FileUpLoadPackage(ctx),
    new ToastPackage(ctx),
    new AMapGeolocationPackage(ctx),
    new RNDeviceInfoPackage(ctx),
    new AMap3DPackage(ctx),
    new BlePlxPackage(ctx),
    new BaiduMapPackage(ctx),
    new AsyncStoragePackage(ctx),
    new SplashScreenPackage(ctx)
  ];
}
