import type {RNPackageContext, RNPackage} from '@rnoh/react-native-openharmony/ts';
import { FastImagePackage } from '@react-native-oh-tpl/react-native-fast-image/ts';
import {RNPerformancePackage} from '@react-native-oh-tpl/react-native-performance/ts';
import { SvgPackage } from '@react-native-oh-tpl/react-native-svg/ts';


export function createRNPackages(ctx: RNPackageContext): RNPackage[] {
  return [
    new FastImagePackage(ctx),
    new RNPerformancePackage(ctx),
    new SvgPackage(ctx),
	];
}
