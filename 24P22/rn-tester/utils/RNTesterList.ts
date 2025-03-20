import type { RNTesterModuleInfo } from '../types/RNTesterTypes';

const Components: Array<RNTesterModuleInfo> = [
  {
    key: 'ButtonExample',
    category: 'UI',
    module: require('../examples/Button/ButtonExample'),
  },
  {
    key: 'ReactNativeButton',
    category: 'Basic',
    module: require('../examples/react-native-button/index').default,
  },
  {
    key: 'ReactNativeSVG',
    category: 'Basic',
    module: require('../examples/react-native-svg/App').default,
  },
  {
    key: 'ReactNativeGiftedChatExample',
    category: 'UI',
    module: require('../examples/react-native-action-sheet/ReactNativeGiftedChatDemo'),
  },
  {
    key: 'ReactNavigationSharedElementDemo',
    category: 'UI',
    module: require('../examples/react-navigation-shared-element/ReactNavigationSharedElementDemo'),
  },
  {
    key: "ReactNativeRestart",
    category: "UI",
    module: require("../examples/react-native-restart/index"),
  },
  {
    key: 'ReactNativeElements (test)',
    category: 'Basic',
    module: require('../examples/react-native-elements/test/SampleElementExample'),
  },
  {
    key: 'ReactNativeDocumentPicker',
    category: 'Basic',
    module: require('../examples/react-native-document-picker/documentPicker'),
  },
  {
    key: 'ReactNativePrintExample',
    category: 'Basic',
    module: require('../examples/react-native-print/PrintTest'),
  }
];

const APIs: Array<RNTesterModuleInfo> = [
  {
    key: 'BorderExample',
    category: 'UI',
    module: require('../examples/Border/BorderExample'),
  },
];

const Modules: any = {};

APIs.concat(Components).forEach(Example => {
  Modules[Example.key] = Example.module;
});

const RNTesterList = {
  APIs,
  Components,
  Modules,
};

export default RNTesterList;
