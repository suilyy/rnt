import type { RNPackageContext, RNPackage } from '@rnoh/react-native-openharmony/ts';
import { SvgPackage } from '@react-native-oh-tpl/react-native-svg/ts';
import {SafeAreaViewPackage} from '@react-native-oh-tpl/react-native-safe-area-context/ts';
import { RNRestartPackage } from '@react-native-oh-tpl/react-native-restart/ts';
import { DocumentPickerPackage } from '@react-native-ohos/react-native-document-picker/ts';
import {RNPrintPackage} from '@react-native-oh-tpl/react-native-print/ts';

export function createRNPackages(ctx: RNPackageContext): RNPackage[] {
  return [
    new SvgPackage(ctx),
    new SafeAreaViewPackage(ctx),
    new RNRestartPackage(ctx),
    new DocumentPickerPackage(ctx),
    new RNPrintPackage(ctx)
  ];
}
