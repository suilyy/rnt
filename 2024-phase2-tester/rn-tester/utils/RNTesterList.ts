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
    module: require('../examples/react-native-button/index'),
  },
  {
    key: 'ReactNativeSVG',
    category: 'Basic',
    module: require('../examples/react-native-svg/App'),
  },
  {
    key: 'ReactNativeEzswiper',
    category: 'Basic',
    module: require('../examples/react-native-ezswiper/App'),
  },
  {
    key: 'ReactNativeDocumentPicker',
    category: 'Basic',
    module: require('../examples/react-native-document-picker/documentPicker'),
  },
  {
    key: 'ReactNativeImageGallery',
    category: 'Basic',
    module: require('../examples/react-native-image-gallery/DemoGallery'),
  },
  {
    key: 'ReactNativeGradientText',
    category: 'Basic',
    module: require('../examples/react-native-linear-gradient-text/index').default,
  },
  {
    key: 'ReactNativeBetterBanner',
    category: 'Basic',
    module: require('../examples/react-native-better-banner/App').default,
  },
  {
    key: 'EasyToast',
    category: 'Basic',
    module: require('../examples/react-native-easy-toast/EasyToast'),
  },
  {
    key: 'ReactNativeContacts',
    category: 'Basic',
    module: require('../examples/react-native-contacts/ContactsExample').default,
  },
  {
    key: 'ReactNativeScrollableTabview',
    category: 'Basic',
    module: require('../examples/react-native-scrollable-tabview/App'),
  },
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
