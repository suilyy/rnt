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
