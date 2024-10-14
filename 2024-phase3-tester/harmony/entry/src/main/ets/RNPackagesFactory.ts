import type {RNPackageContext, RNPackage} from '@rnoh/react-native-openharmony/ts';
import { FastImagePackage } from '@react-native-oh-tpl/react-native-fast-image/ts';
import { SvgPackage } from '@react-native-oh-tpl/react-native-svg/ts';
import { SecureRandomPackage } from '@react-native-oh-tpl/react-native-securerandom/ts';
import { WebViewPackage } from '@react-native-oh-tpl/react-native-webview/ts';

export function createRNPackages(ctx: RNPackageContext): RNPackage[] {
  return [
    new FastImagePackage(ctx),
    new SvgPackage(ctx),
    new SecureRandomPackage(ctx),
    new WebViewPackage(ctx)
	];
}
