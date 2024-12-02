import type {RNPackageContext, RNPackage} from '@rnoh/react-native-openharmony/ts';
import { DocViewPackage } from "@react-native-oh-tpl/react-native-doc-viewer/ts"


export function createRNPackages(ctx: RNPackageContext): RNPackage[] {
  return [
    new DocViewPackage(ctx)
  ];
}
