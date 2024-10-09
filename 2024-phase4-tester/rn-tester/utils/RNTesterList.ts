import type { RNTesterModuleInfo } from '../types/RNTesterTypes';

const Components: Array<RNTesterModuleInfo> = [

  {
    key: 'reactNativeCommunityProgressBarAndroid',
    category: 'Basic',
    module: require('../examples/react-native-community-progress-bar-android/Index'),
  },
  {
    key: 'reactNativeCommunitySlider',
    category: 'Basic',
    module: require('../examples/react-native-community-slider/Index'),
  },
  {
    key: 'rn-placeholder',
    category: 'Basic',
    module: require('../examples/rn-placeholder/Index'),
  },
  {
    key: 'reactNativeQRCodeSVG',
    category: 'Basic',
    module: require('../examples/react-native-qrcode-svg/Index'),
  },
   {
    key: 'react-native-section-list-get-item-layout',
    category: 'Basic',
    module: require('../examples/react-native-section-list-get-item-layout/Index'),
  },
  {
    key: 'react-native-image-picker',
    category: 'Basic',
    module: require('../examples/react-native-image-picker/Index'),
  },
  {
    key: 'react-native-dotenv',
    category: 'Basic',
    module: require('../examples/react-native-dotenv/Index'),
  },
  {
    key: 'react-native-render-html',
    category: 'Basic',
    module: require('../examples/react-native-render-html/Index'),
  },
  {
    key: 'react-native-community-geolocation',
    category: 'Basic',
    module: require('../examples/react-native-community-geolocation/Index'),
  },

  {
    key: 'react-native-community-blur',
    category: 'UI',
    module: require('../examples/react-native-community-blur/Index'),
  },
  {
    key: 'async-storage',
    category: 'Basic',
    module: require('../examples/react-native-async-storage-async-storage/Index'),
  },
  {
    key: 'react-native-view-shot',
    category: 'Basic',
    module: require('../examples/react-native-view-shot/Index'),
  },
  {
    key: 'react-native-fs',
    category: 'Basic',
    module: require('../examples/react-native-fs/Index'),
  },
  {
    key: 'ReactNativeAria',
    category: 'Basic',
    module: require('../examples/react-native-aria/ReactNativeAira'),
  },
  {
    key: 'ReactNativePermission',
    category: 'Basic',
    module: require('../examples/react-native-permission/Index'),
  },
  {
    key: 'react-router-dom',
    category: 'Basic',
    module: require('../examples/react-router-dom/Index'),
  },
  {
    key: 'react-native-base64',
    category: 'Basic',
    module: require('../examples/react-native-base64/Index'),
  },

  {
    key: 'react-native-crypto-js',
    category: 'Basic',
    module: require('../examples/react-native-crypto-js/Index'),
  },
  {
    key: 'htmlparser2-without-node-native',
    category: 'Basic',
    module: require('../examples/htmlparser2-without-node-native/Index'),
  },
  {
    key: 'react-subscribe',
    category: 'Basic',
    module: require('../examples/react-subscribe/TesterDemo/ReactSubscribeTest'),
  },
  {
    key: 'react-native-drag-sort',
    category: 'Basic',
    module: require('../examples/react-native-drag-sort/index'),
  },
  {
    key: 'react-native-cookies-cookies',
    category: 'Basic',
    module: require('../examples/react-native-cookies-cookies/Index'),
  },
  {
    key: 'react-native-translucent-modal',
    category: 'Basic',
    module: require('../examples/react-native-translucent-modal/Index'),
  },
  {
    key: 'react-native-toolbar-android',
    category: 'Basic',
    module: require('../examples/react-native-toolbar-android/Index'),
  },
  {
    key: 'react-native-transitiongroup',
    category: 'Basic',
    module: require('../examples/react-native-transitiongroup/Index'),
  },
  {
    key: 'react-native-checkbox',
    category: 'UI',
    module: require('../examples/react-native-checkbox/Index'),
  },
  {
    key: 'react-native-slider',
    category: 'Basic',
    module: require('../examples/react-native-slider/Index'),
  },
  {
    key: 'react-native-secharts',
    category: 'Basic',
    module: require('../examples/react-native-secharts/App'),
  },
  {
    key: 'react-native-snap-carousel',
    category: 'Basic',
    module: require('../examples/react-native-snap-carousel/SnapCarousel'),
  },
  {
    key: 'react-native-vector-icons',
    category: 'Basic',
    module: require('../examples/react-native-vector-icons/TestIcon'),
  },
  {
    key: 'react-native-webview',
    category: 'Basic',
    module: require('../examples/react-native-webview/tests/WebViewTest'),
  },
  {
    key: 'react-native-autoheight-webview',
    category: 'Basic',
    module: require('../examples/react-native-autoheight-webview/TestCase/index'),
  },
  {
    key: 'react-native-video',
    category: 'Basic',
    module: require('../examples/react-native-video/TestVideo'),
  },
  // {
  //   key: 'react-native-ui-lib',
  //   category: 'Basic',
  //   module: require('../examples/react-native-ui-lib/test/react_native_ui_lib/App'),
  // },
  // {
  //   key: 'react-native-print',
  //   category: 'Basic',
  //   module: require('../examples/react-native-print/test/PrintTest'),
  // },
  {
    key: 'react-native-md5',
    category: 'Basic',
    module: require('../examples/react-native-md5/md5TestExample'),
  },
  {
    key: 'react-native-modalbox',
    category: 'Basic',
    module: require('../examples/react-native-modalBox/ModalBoxDemo'),
  },
  {
    key: 'react-native-zoomable-view',
    category: 'Basic',
    module: require('../examples/react-native-zoomable-view/tester/ReactNativeZoomableViewExample'),
  },
  {
    key: 'react-native-modals',
    category: 'Basic',
    module: require('../examples/react-native-modals/test/ReactNativeModalsExample'),
  },
];

const APIs: Array<RNTesterModuleInfo> = [

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
