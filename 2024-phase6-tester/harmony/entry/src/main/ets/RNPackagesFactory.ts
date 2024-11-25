import type {RNPackageContext, RNPackage} from '@rnoh/react-native-openharmony/ts';
import { SslPinningPackage } from "@react-native-oh-tpl/react-native-ssl-pinning/ts";
import {RNRealmPackage} from '@react-native-oh-tpl/realm/ts';
import {RNBuglyPackage} from '@react-native-oh-tpl/rn-bugly/ts';
import {SearchBarPackage} from '@react-native-oh-tpl/react-native-search-bar/ts';
import {RNFileSelectorPackage}  from '@react-native-oh-tpl/react-native-file-selector/ts';
import {SafeAreaViewPackage} from '@react-native-oh-tpl/react-native-safe-area-context/ts';


export function createRNPackages(ctx: RNPackageContext): RNPackage[] {
  return [
    new SslPinningPackage(ctx),
	  new RNRealmPackage(ctx),
	  new RNBuglyPackage(ctx),
	  new SearchBarPackage(ctx),
    new RNFileSelectorPackage(ctx),
    new SafeAreaViewPackage(ctx),
  ];
}
