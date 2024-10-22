import type {RNPackageContext, RNPackage} from '@rnoh/react-native-openharmony/ts';
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
import { RNOrientationPackage } from '@react-native-oh-tpl/rnoh-orientation/ts';
import { RandomBytesPackage } from '@react-native-oh-tpl/react-native-randombytes/ts';
import { BackgroundTimerTurboModulePackage } from '@react-native-oh-tpl/react-native-background-timer/ts';
import {ContactsPackage} from '@react-native-oh-tpl/react-native-contacts/ts';
import { RNSpinKitPackage } from '@react-native-oh-tpl/react-native-spinkit/ts';
import { RNGetRandomValuesPackage } from "@react-native-oh-tpl/react-native-get-random-values/ts";
import {RNUnistylesPackage} from '@react-native-oh-tpl/react-native-unistyles/ts';
import {BlurhashPackage} from '@react-native-oh-tpl/react-native-blurhash/ts';
import { TouchIdPackage } from "@react-native-oh-tpl/react-native-touch-id/ts";
import {ChartsWrapperPackage} from '@react-native-oh-tpl/react-native-charts-wrapper/ts';

export function createRNPackages(ctx: RNPackageContext): RNPackage[] {
  return [
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
	new RNSpinKitPackage(ctx
	new RNGetRandomValuesPackage(ctx),
	new RNUnistylesPackage(ctx),
	new BlurhashPackage(ctx),
	new TouchIdPackage(ctx),
	new ChartsWrapperPackage(ctx),
  ];
}
