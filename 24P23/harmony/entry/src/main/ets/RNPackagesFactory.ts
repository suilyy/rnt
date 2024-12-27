import type {RNPackageContext, RNPackage} from '@rnoh/react-native-openharmony/ts';
import { SvgPackage } from '@react-native-oh-tpl/react-native-svg/ts';
import { RNBootSplashPackage } from '@react-native-oh-tpl/react-native-bootsplash/ts';

export function createRNPackages(ctx: RNPackageContext): RNPackage[] {
  return [
    new SvgPackage(ctx),
    new RNBootSplashPackage(ctx),
  ];
}
