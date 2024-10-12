import type {RNPackageContext, RNPackage} from '@rnoh/react-native-openharmony/ts';
import { DocumentPickerPackage } from '@react-native-oh-tpl/react-native-document-picker/ts';
import {RNPerformancePackage} from '@react-native-oh-tpl/react-native-performance/ts'
import { RNRestartPackage } from '@react-native-oh-tpl/react-native-restart/ts';
import {SafeAreaViewPackage} from '@react-native-oh-tpl/react-native-safe-area-context/ts';
export function createRNPackages(ctx: RNPackageContext): RNPackage[] {
  return [
    new DocumentPickerPackage(ctx),
    new RNPerformancePackage(ctx),
    new RNRestartPackage(ctx),
    new SafeAreaViewPackage(ctx),
  ];
}
