import type {RNPackageContext, RNPackage} from '@rnoh/react-native-openharmony/ts';
import { DocumentPickerPackage } from '@react-native-oh-tpl/react-native-document-picker/ts';
export function createRNPackages(ctx: RNPackageContext): RNPackage[] {
  return [
    new DocumentPickerPackage(ctx)
  ];
}
