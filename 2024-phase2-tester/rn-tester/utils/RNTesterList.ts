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
    key: 'ReactNativeChartsWrapper',
    category: 'Basic',
    module: require('../examples/react-native-charts-wrapper/index'),
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
    key: 'ReactNativeCountryPickerModalView',
    category: 'UI',
    module: require('../examples/react-native-country-picker-modal/App').default,
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
    key: 'ReactNativeModalExample',
    category: 'UI',
    module: require('../examples/react-native-modal/ModalDemo'),
  },
  {
    key: 'ReactNativeKeepAwakeExample',
    category: 'Basic',
    module: require('../examples/react-native-keep-awake/KeepAwakeExample'),
  },
  {
    key: 'ReactNativeMultiSliderExample',
    category: 'UI',
    module: require('../examples/react-native-multi-slider/MultiSliderDemo'),
  },
  {
    key: 'ReactNativeOrientationExample',
    category: 'Basic',
    module: require('../examples/react-native-orientation/orientationTestDemo'),
  },
  {
    key: 'ReactNativeMaterialButtonsExample',
    category: 'UI',
    module: require('../examples/react-native-material-buttons/MaterialButtons'),
  },
  {
    key: 'ReactNativeTextfieldExample',
    category: 'UI',
    module: require('../examples/react-native-material-textfield/TextFieldDemo'),
  },
  {
    key: 'ReactNativeRandombytesExample',
    category: 'Basic',
    module: require('../examples/react-native-randombytes//RandomBytesDemo'),
  },
  {
    key: 'ReactNativeBackgroundTimerExample',
    category: 'Basic',
    module: require('../examples/react-native-background-timer/BackgroundTimerExample'),
  },
  {
    key: 'ReactNativeContactsExample',
    category: 'Basic',
    module: require('../examples/react-native-contacts/ContactsDemo'),
  },
  {
    key: 'RNTourguideExample',
    category: 'UI',
    module: require('../examples/rn-tourguide/App'),
  },
  {
    key: 'RNViewOverflowExample',
    category: 'UI',
    module: require('../examples/react-native-view-overflow/ViewOverflowDemo'),
  },
  {
    key: 'ReactNativeSpinKitExample',
    category: 'UI',
    module: require('../examples/react-native-spinkit/SpinKitDemo'),
  },
  {
    key: 'ReactNativeGetRandomValuesExample',
    category: 'Basic',
    module: require('../examples/react-native-get-random-values/GetRandomValuesExample'),
  },
  {
    key: 'ReactNativeUnistylesExample',
    category: 'UI',
    module: require('../examples/react-native-unistyles/UnistylesExample'),
  },
  {
    key: 'ReactNativeScreenHelperExample',
    category: 'Basic',
    module: require('../examples/react-native-iphone-screen-helper/ScreenHelperDemo'),
  },
  {
    key: 'ReactNativeBlurhashExample',
    category: 'Basic',
    module: require('../examples/react-native-blurhash/BlurhashDemo'),
  },
  {
    key: 'ReactNativeAnimatableExample',
    category: 'UI',
    module: require('../examples/react-native-animatable/App'),
  },
  {
    key: 'ReactNativeTouchIdExample',
    category: 'Basic',
    module: require('../examples/react-native-touch-id/HarmonyTouchId'),
  },
  {
    key: 'ReactNativeCreateThumbnailExample',
    category: 'Basic',
    module: require('../examples/react-native-create-thumbnail/CreateThumbnailDemo'),
  },
  {
    key: 'ReactNativeSignatureCaputureExample',
    category: 'UI',
    module: require('../examples/react-native-signature-capture/signatureCapture'),
  },
  {
    key: 'ReactNativeFingerprintScannerExample',
    category: 'Basic',
    module: require('../examples/react-native-fingerprint-scanner/FingerprintScannerDemo'),
  },
  {
    key: 'ReactNativeBrowserExample',
    category: 'Basic',
    module: require('../examples/react-native-inappbrowser/BrowserDemo1'),
  },
  {
    key: 'ReactNativeMaterialUiExample',
    category: 'UI',
    module: require('../examples/react-native-material-ui/index'),
  },
  {
    key: 'ReactNativeCryptoExample',
    category: 'Basic',
    module: require('../examples/react-native-crypto/CryptoExample'),
  },
  {
    key: 'ReactNativeNativewindExample',
    category: 'UI',
    module: require('../examples/Nativewind/App'),
  },
  {
    key: 'ReactNativeSystemSettingExample',
    category: 'Basic',
    module: require('../examples/react-native-system-setting/ReactNativeSystemSettingDemo'),
  },
  {
    key: 'ReactNativePaperExample',
    category: 'UI',
    module: require('../examples/react-native-paper/PaperExample'),
  },
  {
    key: 'ReactNativePickerSelectExample',
    category: 'UI',
    module: require('../examples/react-native-picker-select/PickerSelectDemo'),
  },
  {
    key: 'ReactNativeHapticFeedbackExample',
    category: 'Basic',
    module: require('../examples/react-native-haptic-feedback/Tester/HapticFeedbackExample'),
  },
  {
    key: 'ReactNativeGridExample',
    category: 'UI',
    module: require('../examples/react-native-easy-grid/GridExample'),
  },
  {
    key: 'ReactNativeDropDownExample',
    category: 'UI',
    module: require('../examples/react-native-autocomplete-dropdown/index'),
  },
  {
    key: 'ReactNativePDFViewExample',
    category: 'UI',
    module: require('../examples/react-native-PDFView/AppPDF'),
  },
  {
    key: 'ReactNativeReconnectingWebSocketDemo',
    category: 'Basic',
    module: require('../examples/react-native-gifted-chat/App')
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
