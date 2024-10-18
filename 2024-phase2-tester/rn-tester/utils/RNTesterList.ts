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
    module: require('../examples/react-native-better-banner/App'),
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
  {
    key: 'ReactNativeRootToastExample',
    category: 'UI',
    module: require('../examples/react-native-root-toast/ReactNativeRootToastExample'),
  },
  {
    key: 'ReactNativeGiftedChatExample',
    category: 'UI',
    module: require('../examples/react-native-action-sheet/ReactNativeGiftedChatDemo'),
  },
  {
    key: 'ReactNativeCommunicationsExample',
    category: 'Basic',
    module: require('../examples/react-native-communications/Communication'),
  },
  {
    key: 'ReactNativeTypingAnimationExample',
    category: 'UI',
    module: require('../examples/react-native-typing-animation/TypingAnimation'),
  },
  {
    key: 'ReactNativeFeatherExample',
    category: 'UI',
    module: require('../examples/react-native-feather/FeatherExample'),
  },
  {
    key: 'ReactNativeLightBoxExample',
    category: 'UI',
    module: require('../examples/react-native-lightbox-v2/ReactNativeLightBoxExample'),
  },
  {
    key: 'RNMetariDesignColorExample',
    category: 'UI',
    module: require('../examples/react-native-material-design-styles/MetarilDesignColor'),
  },
  {
    key: 'ReactNativeFlipCardExample',
    category: 'UI',
    module: require('../examples/react-native-flip-card/FlipCardExample'),
  },
  {
    key: 'ReactNativeRatingsExample',
    category: 'UI',
    module: require('../examples/react-native-ratings/RatingsDemo'),
  },
  {
    key: 'ReactNativeHtmlViewExample',
    category: 'UI',
    module: require('../examples/react-native-htmlview/HtmlViewExample'),
  },
  {
    key: 'ReactNativeSwitchSelectorExample',
    category: 'UI',
    module: require('../examples/react-native-switch-selector/SwitchSelector'),
  },
  {
    key: 'RNThemeProviderExample',
    category: 'UI',
    module: require('../examples/react-theme-provider/ThemeProviderExample'),
  },
  {
    key: 'ReactNativeCollapsibleExample',
    category: 'UI',
    module: require('../examples/react-native-collapsible/CollapsibleExample'),
  },
  {
    key: 'ReactNativeSizeMattersExample',
    category: 'UI',
    module: require('../examples/react-native-size-matters/SizeMattersTest'),
  },
  {
    key: 'ReactNativeShimmerPlaceholderExample',
    category: 'UI',
    module: require('../examples/react-native-shimmer-placeholder/App'),
  },
  {
    key: 'ReactNativeOfflineExample',
    category: 'UI',
    module: require('../examples/react-native-offline/OfflineDemoTest'),
  },
  {
    key: 'ReactNavigationSharedElementDemo',
    category: 'UI',
    module: require('../examples/react-navigation-shared-element/ReactNavigationSharedElementDemo'),
  },
  {
    key: 'ReactNativeNativeWaterfallFlow',
    category: 'Basic',
    module: require('../examples/react-native-waterfall-flow/WaterfallFlowTestCase'),
  },
  {
    key: 'ReactNativeMarquee',
    category: 'Basic',
    module: require('../examples/react-native-marquee-ab/TestPage'),
  },
  {
    key: "ReactNativePerformanceExample",
    category: "UI",
    module: require("../examples/react-native-performance/index"),
  },
  {
    key: "ReactNativeRestart",
    category: "UI",
    module: require("../examples/react-native-restart/index"),
  },
  {
    key: 'ReactNativeHttpBridge',
    category: 'Basic',
    module: require('../examples/react-native-http-bridge/index'),
  },
  {
    key: 'ReactNativeURLPolyfill',
    category: 'Basic',
    module: require('../examples/react-native-url-polyfill/index'),
  },
  {
    key: 'ConsoleTest',
    category: 'Basic',
    module: require('../examples/react-native-vconsole/VConsoleTest'),
  },
  {
    key: 'ReactNativeSortableList',
    category: 'UI',
    module: require('../examples/react-native-sortable-list/App'),
  },
  {
    key: 'RNJsonTree',
    category: 'UI',
    module: require('../examples/react-native-json-tree/JsonTreeTest'),
  },{
    key: 'RNJsonTree',
    category: 'UI',
    module: require('../examples/react-native-json-tree/JsonTreeTest'),
  },
  {
    key: 'ReactNativeReconnectingWebSocketDemo',
    category: 'Basic',
    module: require('../examples/react-native-reconnecting-websocket/Test')
  },
  {
    key: 'ReactNativeShadow2Example',
    category: 'UI',
    module: require('../examples/react-native-shadow-2/Shadow2Demo'),
  },
  {
    key: 'ReactNativeNativewind',
    category: 'Basic',
    module: require('../examples/Nativewind/App').default,
  },
  {
    key: 'ReactNativeImageHeaderScrollView',
    category: 'Basic',
    module: require('../examples/react-native-image-header-scroll-view/App'),
  },
  {
    key: 'ReactNativeElements (demo)',
    category: 'Basic',
    module: require('../examples/react-native-elements/demo/Elements'),
  },
  {
    key: 'ReactNativeElements (test)',
    category: 'Basic',
    module: require('../examples/react-native-elements/test/SampleElementExample'),
  },
  {
    key: 'NativeBase',
    category: 'UI',
    module: require('../examples/NativeBase/App'),
  },
  {
    key: 'HoleViewDemo',
    category: 'Basic',
    module: require('../examples/react-native-hole-view/HoleViewDemo'),
  },
  {
    key: 'ReactNativeContextMenuView',
    category: 'UI',
    module: require('../examples/react-native-context-menu-view/ContextMenuViewTest'),
  }, 
  {
    key: 'RNCountryPicker',
    category: 'UI',
    module: require('../examples/react-native-country-picker-modal/test/index'),
  },
  {
    key: 'RNCountdownCircleTime',
    category: 'UI',
    module: require('../examples/react-countdown-circle-timer/test/countdownCircleTime'),
  }, 
  {
    key: 'RNCommunityHooks',
    category: 'UI',
    module: require('../examples/react-native-community-hooks/HooksTest'),
  },
  {
    key: 'RNShakeExampleDemo',
    category: 'UI',
    module: require('../examples/react-native-shake/ShakeExampleDemo'),
  },
  {
    key: 'ReactNativeElementDropdownView',
    category: 'Basic',
    module: require('../examples/react-native-element-dropdown/App').default,
  },
  {
    key: 'ReactNativeCameraKit',
    category: 'Basic',
    module: require('../examples/react-native-camera-kit/App').default,
  },
  {
    key: 'ReactNativeVectorDrawable',
    category: 'UI',
    module: require('../examples/react-native-vector-drawable/App'),
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
