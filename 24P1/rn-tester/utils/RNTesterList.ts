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
    key: 'SyanImagePicker',
    category: 'UI',
    module: require('../examples/react-native-syan-image-picker/SyanImagePickerDemo').default,
  },
  {
    key: 'Safe-Area-Context',
    category: 'UI',
    module: require('../examples/react-native-safe-area-context/index').default,
  },
  {
    key: 'LinearGradient',
    category: 'UI',
    module: require('../examples/react-native-linear-gradient/LinearGradientDemo-CAPI').default,
  },
  {
    key: 'CardView',
    category: 'UI',
    module: require('../examples/react-native-cardview/CardViewTest').default,
  },
  {
    key: 'spring-scrollview',
    category: 'UI',
    module: require('../examples/react-native-spring-scrollview/APP').default,
  },
  {
    key: 'TextGradient',
    category: 'UI',
    module: require('../examples/react-native-text-gradient/TextGradientDemo').default,
  },
  {
    key: 'MjRfresh',
    category: 'UI',
    module: require('../examples/react-native-mjrefresh/MjRefreshScrollViewDemo-CAPI').default,
  },
  {
    key: 'largelist',
    category: 'UI',
    module: require('../examples/react-native-largelist-v3/test/largelist/largelistTest').default,
  },
  {
    key: 'pager-view',
    category: 'UI',
    module: require('../examples/react-native-pager-view/PageViewTest').default,
  },
  {
    key: 'SmartRefreshLayout',
    category: 'UI',
    module: require('../examples/react-native-SmartRefreshLayout/capi-demo/index').default,
  },
  {
    key: 'image-resizer',
    category: 'UI',
    module: require('../examples/react-native-image-resizer/ImageResizerDemo').default,
  },
  {
    key: 'react-native-localize',
    category: 'Tools',
    module: require('../examples/react-native-localize/LocalizeDemo').default,
  },
  {
    key: 'nested-scroll-view',
    category: 'UI',
    module: require('../examples/react-native-nested-scroll-view/test/ScrollViewTest').default,
  },
  {
    key: 'masked-view',
    category: 'UI',
    module: require('../examples/masked-view/MaskedDemo').default,
  },
  {
    key: 'root-modal',
    category: 'UI',
    module: require('../examples/react-native-root-modal/main').default,
  },
  {
    key: 'react-native-switch-pro',
    category: 'UI',
    module: require('../examples/react-native-switch-pro/switchProTest').default,
  },
  {
    key: 'react-native-sqlite-storage',
    category: 'Tools',
    module: require('../examples/react-native-sqlite-storage/sqlitedemo').default,
  },
  {
    key: 'react-native-bindingx',
    category: 'UI',
    module: require('../examples/bindingx/App').default,
  },
  {
    key: 'react-native-gesture-handler',
    category: 'UI',
    module: require('../examples/react-native-gesture-handler/App').default,
  },
  {
    key: 'flash-list',
    category: 'UI',
    module: require('../examples/flash-list/TestIndex').default,
  },
  {
    key: 'react-native-calendar-events',
    category: 'UI',
    module: require('../examples/react-native-calendar-events/CalendarDemo-CAPI').default,
  },
  {
    key: 'react-native-drop-shadow',
    category: 'UI',
    module: require('../examples/react-native-drop-shadow/DropShadowTest').default,
  },
  {
    key: 'react-native-flexi-radio-button',
    category: 'UI',
    module: require('../examples/react-native-flexi-radio-button/test/flexiRadioButtonTest').default,
  },
  {
    key: 'react-native-root-siblings',
    category: 'UI',
    module: require('../examples/react-native-root-siblings/index').default,
  },
   {
    key: 'react-native-clippathview',
    category: 'UI',
    module: require('../examples/react-native-clippathview/ClipPathViewTest').default,
  },
  {
    key: 'react-native-safe-module',
    category: 'UI',
    module: require('../examples/react-native-safe-module/SafeModuleDemo').default,
  },
  {
    key: 'react-native-fileupload',
    category: 'UI',
    module: require('../examples/react-native-fileupload/fileUploadDemo').default,
  },
  {
    key: 'color-matrix-image-filters',
    category: 'UI',
    module: require('../examples/react-native-color-matrix-image-filters/views/app/App').default,
  },
  {
    key: 'react-native-toast',
    category: 'UI',
    module: require('../examples/react-native-toast/ToastMasterDemo').default,
  },
  {
    key: 'react-native-amap-geolocation',
    category: 'UI',
    module: require('../examples/react-native-amap-geolocation/location').default,
  },
  {
    key: 'react-native-simple-toast',
    category: 'UI',
    module: require('../examples/react-native-simple-toast/SimpleToastDemo').default,
  },
  {
    key: 'react-native-device-info',
    category: 'Tools',
    module: require('../examples/react-native-device-info/RNDeviceInfoDemo').default,
  },
  {
    key: 'react-native-amap3d',
    category: 'Map',
    module: require('../examples/react-native-amap3d/index').default,
  },
  {
    key: 'react-native-ble-plx',
    category: 'BlueTooth',
    module: require('../examples/react-native-ble-plx/BlePlxDemo').default,
  },
  {
    key: 'react-native-baidu-map',
    category: 'Map',
    module: require('../examples/react-native-baidu-map/index').default,
  },
  {
    key: 'react-native-storage',
    category: 'BlueTooth',
    module: require('../examples/react-native-storage/storagedemo').default,
  },
  {
    key: 'react-native-splash-screen',
    category: 'Map',
    module: require('../examples/react-native-splash-screen/SplashScreenDemo').default,
  },
  {
    key: 'react-native-reanimated',
    category: 'Map',
    module: require('../examples/react-native-reanimated/ReanimateListDemo').default,
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
