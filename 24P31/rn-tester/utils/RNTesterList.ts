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
    key: 'ReactNativeEmailLink',
    category: 'Basic',
    module: require('../examples/react-native-email-link/tester/EmailLinkExample'),
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
    key: 'RNCountdownCircleTime',
    category: 'UI',
    module: require('../examples/react-countdown-circle-timer/test/countdownCircleTime'),
  },
   {
    key: 'RNShakeExampleDemo',
    category: 'UI',
    module: require('../examples/react-native-shake/ShakeExampleDemo'),
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
    module: require('../examples/react-native-vision-camera/test/App').default,
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
  {
    key: 'react-native-step-indicator',
    category: 'Basic',
    module: require('../examples/react-native-step-indicator/ReactNativeStepIndicator'),
  },
  {
    key: 'react-native-keys',
    category: 'UI',
    module: require('../examples/react-native-keys/ReactNativeKeys'),
  },
  {
    key: 'ReactNativeReanimatedBottomSheet',
    category: 'UI',
    module: require('../examples/react-native-reanimated-bottom-sheet/index'),
  },
  {
    key: 'ReactNativeScrollBottomSheet',
    category: 'UI',
    module: require('../examples/react-native-scroll-bottom-sheet'),
  },
  {
    key: 'ReactNativeMaskedText',
    category: 'UI',
    module: require('../examples/react-native-masked-text/MaskedTextDemo'),
  },
  {
    key: 'ReactNativeLoadingSpinnerOverlay',
    category: 'UI',
    module: require('../examples/react-native-loading-spinner-overlay/LoadingSpinnerOverlayDemo'),
  },
  {
    key: 'ReactNativeWalkthroughTooltip',
    category: 'UI',
    module: require('../examples/react-native-walkthrough-tooltip/Walkthrough'),
  },
  {
    key: 'ReactNativeNotifier',
    category: 'UI',
    module: require('../examples/react-native-notifier/NotifierTest'),
  },
  {
    key: 'ReactNativeConfettiCannon',
    category: 'UI',
    module: require('../examples/react-native-confetti-cannon/ConfettiCannonExample'),
  },
  {
    key: 'ReactNativeMaterialRipple',
    category: 'UI',
    module: require('../examples/react-native-material-ripple/MaterialRippleExample'),
  },
  {
    key: 'ReactNativeResponsiveFontSize',
    category: 'UI',
    module: require('../examples/react-native-responsive-fontSize/ResponsiveFontsizeExample'),
  },
  {
    key: 'ReactNativeRecaptchaThatWorks',
    category: 'UI',
    module: require('../examples/react-native-recaptcha-that-works/ReCAPTCHAExample'),
  },
  {
    key: 'ReactNativeCopilot',
    category: 'UI',
    module: require('../examples/react-native-copilot/test/CopilotExample'),
  },
  {
    key: 'ReactNavigationBottomSheet',
    category: 'UI',
    module: require('../examples/react-navigation-bottom-sheet/BottomExample'),
  },
  {
    key: 'ReactNativeAwesomeGallery',
    category: 'UI',
    module: require('../examples/react-native-awesome-gallery/test/index'),
  },
  {
    key: 'ReactNativeNetworkInfo',
    category: 'UI',
    module: require('../examples/react-native-network-info/NetworkInfoTest'),
  },
  {
    key: 'ReactNativeMarkdownRenderer',
    category: 'UI',
    module: require('../examples/react-native-markdown-renderer/TestReactNativeMarkdownRendererDemo'),
  },
  {
    key: 'ReactNativeSnackbar',
    category: 'UI',
    module: require('../examples/react-native-snackbar/SnackbarDemo'),
  },
  {
    key: 'ReactNativeQuickBase64',
    category: 'UI',
    module: require('../examples/react-native-quick-base64/QuickBase64Test'),
  },
  {
    key: 'ReactNativeVersionNumber',
    category: 'UI',
    module: require('../examples/react-native-version-number/index'),
  },
  {
    key: 'ReactNativeImageMarker',
    category: 'UI',
    module: require('../examples/react-native-image-marker/ImageMarker'),
  },
  {
    key: 'ReactNativeIncallManager',
    category: 'UI',
    module: require('../examples/react-native-incall-manager/test/InCallManagerTest'),
  },
  {
    key: 'ReactNativeMlkitOcr',
    category: 'UI',
    module: require('../examples/react-native-mlkit-ocr/Test/OcrTest'),
  },
  {
    key: 'ReactNativeThemeControl',
    category: 'UI',
    module: require('../examples/react-native-theme-control/ThemeControlTest'),
  },
  {
    key: 'ReactNativeMapClustering',
    category: 'Basic',
    module: require('../examples/react-native-map-clustering/map-clustering/App'),
  },
  {
    key: 'ReactNavigationHeaderButtons',
    category: 'UI',
    module: require('../examples/react-navigation-header-buttons/test/index'),
  },
  {
    key: 'ReactNativeBars',
    category: 'UI',
    module: require('../examples/react-native-bars/BarExample'),
  },
  {
    key: 'ReactNativeKeyboardAccessory',
    category: 'UI',
    module: require('../examples/react-native-keyboard-accessory/BusKeyBoardIndex'),
  },
  {
    key: 'ReactNativeSendIntent',
    category: 'UI',
    module: require('../examples/react-native-send-intent/SendIntent'),
  },
  {
    key: 'ReactNativeErrorBoundary',
    category: 'Basic',
    module: require('../examples/react-native-error-boundary/ErrorBoundaryTest'),
  },
  {
    key: 'ReactNativeMail',
    category: 'Basic',
    module: require('../examples/react-native-mail/App'),
  },
  {
    key: 'EmojiKeyboard',
    category: 'Basic',
    module: require('../examples/rn-emoji-keyboard/EmojiKeyboardExample'),
  },
  {
    key: 'Ting',
    category: 'UI',
    module: require('../examples/ting/Test/TingDemo'),
  },
  {
    key: 'ReactNativeStickyHeader',
    category: 'UI',
    module: require('../examples/react-native-sticky-header/tester/index'),
  },
  {
    key: 'ReactNativeMapsDirections',
    category: 'UI',
    module: require('../examples/react-native-maps-directions/MapsDirectionsTest'),
  },
  {
    key: 'ReactNativeWorkletsCore',
    category: 'UI',
    module: require('../examples/react-native-worklets-core/WorkletsCoreTest'),
  },
  {
    key: 'ReactNativeImageCapinsetsNext',
    category: 'UI',
    module: require('../examples/react-native-image-capinsets-next/ImageCapInsetsTest'),
  },
  {
    key: 'ReactNativeImageCropPicker',
    category: 'UI',
    module: require('../examples/react-native-image-crop-picker/ImageCropPickerDemo'),
  },
  {
    key: 'ReactNativeImagePanZoom',
    category: 'UI',
    module: require('../examples/react-native-image-pan-zoom/Tester/ImageZoomExample'),
  },
  {
    key: 'ReactNativeImageViewing',
    category: 'UI',
    module: require('../examples/react-native-image-viewing/Tester/index'),
  },
  {
    key: 'ReactNativeThemeSwitchAnimation',
    category: 'UI',
    module: require('../examples/react-native-theme-switch-animation/test/ReactNativeThemeSwitchAnimation'),
  },
  {
    key: 'ReactNativeZipArchive',
    category: 'UI',
    module: require('../examples/react-native-zip-archive/ZipArchiveTest'),
  },
  {
    key: 'ReactNativeGraph',
    category: 'UI',
    module: require('../examples/react-native-graph/Tester/LineGraphExample'),
  },
  {
    key: 'MixpanelReactNative',
    category: 'UI',
    module: require('../examples/mixpanel-react-native/test/MixpanelExample'),
  },
  {
    key: 'OpSqlite',
    category: 'UI',
    module: require('../examples/@op-engineering-op-sqlite/test/TestForOpSqlite'),
  },
  {
    key: 'react-native-maps',
    category: 'basic',
    module: require('../examples/react-native-maps/Test/App'),
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
