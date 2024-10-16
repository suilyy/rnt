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
  ];
}
