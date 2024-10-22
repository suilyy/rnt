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
    key: "ReactNativeLocalizationSettingsExample",
    category: "UI",
    module: require("../examples/react-native-localization-settings/index"),
  },
  {
    key: "ReactNativeCompassHeadingExample",
    category: "UI",
    module: require("../examples/react-native-compass-heading/index"),
  },
  {
    key: "ReactNativeMultipleSelectExample",
    category: "UI",
    module: require("../examples/react-native-multiple-select/index"),
  },
  {
    key: "ReactNativeScreenshotPreventExample",
    category: "UI",
    module: require("../examples/react-native-screenshot-prevent/index"),
  },
  {
    key: 'ReactNativeSVG',
    category: 'Basic',
    module: require('../examples/react-native-svg/App'),
  },
  {
    key: 'ReactNativeFastImage',
    category: 'Basic',
    module: require('../examples/react-native-fast-image/FastImageDemo'),
  },
  {
    key: 'ReactNativeMaterialMenu',
    category: 'Basic',
    module: require('../examples/react-native-material-menu/ReactNativeMaterialMenuDemo'),
  },
  {
    key: 'SensitiveInfo',
    category: 'Basic',
    module: require('../examples/react-native-sensitive-info/SensitiveInfoDemo'),
  },
  {
    key: '@react-navigation',
    category: 'Basic',
    module: require('../examples/@react-navigation/App'),
  },
  {
    key: 'ReactNativeTts',
    category: 'Basic',
    module: require('../examples/react-native-tts/TtsTest'),
  },
  {
    key: 'ReactNativeMaskText',
    category: 'Basic',
    module: require('../examples/react-native-mask-text/MaskTextDemo'),
  },
  {
    key: 'ReactNativeSecureRandom',
    category: 'Basic',
    module: require('../examples/react-native-securerandom/Securerandom'),
  },
   {
    key: 'ReactNativeFileAccess',
    category: 'UI',
    module: require('../examples/react-native-file-access/ReactNativeFileAccess').default,
  },
  {
    key: 'ReactNativeAudioRecordPlayer',
    category: 'UI',
    module: require('../examples/react-native-audio-recorder-player/AudioRecordPlayerExample'),
  },
  {
    key: 'ReactNativeSafeModules',
    category: 'Basic',
    module: require('../examples/react-native-safe-modules/SafeModuleExample'),
  },  
  {
    key: 'react-native-signature-canvas',
    category: 'Basic',
    module: require('../examples/react-native-signature-canvas/index'),
  },
  {
    key: 'ReactNativeUdp',
    category: 'Basic',
    module: require('../examples/react-native-udp/react-native-udp').default,
  },
  {
    key: 'ReactNativeDismissKeyboard',
    category: 'Basic',
    module: require('../examples/react-native-dismiss-keyboard/ReactNativeDismissKeyboardDemo'),
  },
  {
    key: 'ReactNativeParsedText',
    category: 'Basic',
    module: require('../examples/react-native-parsed-text/TestNativeParsedTextDemo'),
  },
  {
    key: 'ReactNativeAutocompleteInput',
    category: 'Basic',
    module: require('../examples/react-native-autocomplete-input/AutoCompleteInputExample'),
  },
  {
    key: 'ReactNativeNeomorphShadows',
    category: 'Basic',
    module: require('../examples/react-native-neomorph-shadows/ShadowsDemo'),
  },
  {
    key: 'ReactNativeDefaultPreference',
    category: 'Basic',
    module: require('../examples/react-native-default-preference/App'),
  },
  {
    key: 'PhoneNumberInput',
    category: 'Basic',
    module: require('../examples/react-native-phone-number-input/index'),
  },
  {
    key: 'ReactNativeVisionCameraView',
    category: 'Basic',
    module: require('../examples/react-native-vision-camera/App').default,
  },
  {
    key: 'ReactNativeFileViewer',
    category: 'Basic',
    module: require('../examples/react-native-file-viewer/FileViewerDemo'),
  },
  {
    key: 'ReactNativeIndicators',
    category: 'UI',
    module: require('../examples/react-native-indicators/IndicatorsExample'),
  },
  {
    key: 'ReactNativeHyperlink',
    category: 'UI',
    module: require('../examples/react-native-hyperlink/HyperlinkTest'),
  },
  {
    key: 'ReactNativeAutolink',
    category: 'UI',
    module: require('../examples/react-native-autolink/AutoLinkExample'),
  },
  {
    key: 'ReactNativeSwipeableList',
    category: 'UI',
    module: require('../examples/react-native-swipeable-list/index'),
  },
  {
    key: 'ReactNativeImageColors',
    category: 'UI',
    module: require('../examples/react-native-image-colors/ImageColorsExample'),
  },
  {
    key: 'RNSlidingUpPanel',
    category: 'UI',
    module: require('../examples/rn-sliding-up-panel/index'),
  },
  {
    key: 'ReactNativeSwitch',
    category: 'UI',
    module: require('../examples/react-native-switch/SwitchDemo'),
  },
  {
    key: 'ReactNativeSvgCharts',
    category: 'UI',
    module: require('../examples/react-native-svg-charts/App'),
  },
  {
    key: 'ReactContentLoader',
    category: 'UI',
    module: require('../examples/react-content-loader/APP'),
  },
  {
    key: 'ReactNativeTcpSocket',
    category: 'UI',
    module: require('../examples/react-native-tcp-socket/TcpSocketTest'),
  },
  {
    key: 'ReactNativeBleManager',
    category: 'UI',
    module: require('../examples/react-native-ble-manager/bleManagerExample'),
  },
  {
    key: 'Voice',
    category: 'UI',
    module: require('../examples/voice/VoiceTest'),
  },
  {
    key: 'PlatformColors',
    category: 'UI',
    module: require('../examples/klarna-platform-colors/PlatformColorsTest'),
  },
  {
    key: 'ReactNativeBackgroundFetch',
    category: 'UI',
    module: require('../examples/react-native-background-fetch/BackroundFetchExample'),
  },
  {
    key: 'ReactNativeBarcodeBuilder',
    category: 'UI',
    module: require('../examples/react-native-barcode-builder/BarcodeBuilderExample'),
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
