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
