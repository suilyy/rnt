import type { RNTesterModuleInfo } from '../types/RNTesterTypes';

const Components: Array<RNTesterModuleInfo> = [
  // {
  //   key: 'ButtonExample',
  //   category: 'UI',
  //   module: require('../examples/Button/ButtonExample'),
  // },
  {
    key: 'ReactNativeButton',
    category: 'Basic',
    module: require('../examples/react-native-button/index'),
  },
  // {
  //   key: 'ReactNativeSVG',
  //   category: 'Basic',
  //   module: require('../examples/react-native-svg/App'),
  // },
  {
    key: 'ReactNativeCalendars',
    category: 'Basic',
    module: require('../examples/react-native-calendars/App'),
  },
  // {
  //   key: 'ReactNativeChartKit',
  //   category: 'Basic',
  //   module: require('../examples/react-native-chart-kit/App'),
  // },
  // {
  //   key: 'ReactNativeAlipay',
  //   category: 'Basic',
  //   module: require('../examples/react-native-alipay/ReactNativeAlipayTest'),
  // },
  {
    key: 'ReactNativeDocViewer',
    category: 'Basic',
    module: require('../examples/react-native-doc-viewer/DocViewerTest'),
  },
  // {
  //   key: 'ReactNativeConfig',
  //   category: 'Basic',
  //   module: require('../examples/react-native-config/RNConfigTest'),
  // },
  {
    key: 'ReactNativeBounceable',
    category: 'Basic',
    module: require('../examples/react-native-bounceable/BounceableTest'),
  },
  {
    key: 'ReactNativeBouncyCheckbox',
    category: 'Basic',
    module: require('../examples/react-native-bouncy-checkbox/BouncyCheckboxExample'),
  },
  // {
  //   key: 'ReactNativeIdleTimer',
  //   category: 'Basic',
  //   module: require('../examples/react-native-idle-timer/IdleTimerTest'),
  // },
  {
    key: 'ReactNativeImageCapinsetsNext',
    category: 'Basic',
    module: require('../examples/react-native-image-capinsets-next/ImageCapInsetsTest'),
  },
  {
    key: 'ReactNativeSwipeGestures',
    category: 'Basic',
    module: require('../examples/react-native-swipe-gestures/SwipeGesturesTest'),
  },
  // {
  //   key: 'ReactNativeThumbnail',
  //   category: 'Basic',
  //   module: require('../examples/react-native-thumbnail/ThumbnailExample'),
  // },
  {
    key: 'ReactNativeVideoControls',
    category: 'Basic',
    module: require('../examples/react-native-video-controls/VideoControlsTest'),
  },
  {
    key: 'ReactNativeTextinputMaxlengthFixed',
    category: 'Basic',
    module: require('../examples/react-native-textinput-maxlength-fixed/TextInputExample'),
  },
  {
    key: 'VictoryNativeXl',
    category: 'Basic',
    module: require('../examples/victory-native-xl/App'),
  },
  // {
  //   key: 'CustomKeyboard',
  //   category: 'Basic',
  //   module: require('../examples/react-native-custom-keyboard/App'),
  // },
  // {
  //   key: 'ImageRotate',
  //   category: 'Basic',
  //   module: require('../examples/react-native-image-rotate/App'),
  // },
  // {
  //   key: 'UserAgent',
  //   category: 'Basic',
  //   module: require('../examples/react-native-user-agent/UserAgentTest'),
  // },
  // {
  //   key: 'ExitApp',
  //   category: 'Basic',
  //   module: require('../examples/react-native-exit-app/App'),
  // },
  // {
  //   key: 'FileSelector',
  //   category: 'Basic',
  //   module: require('../examples/react-native-file-selector/FileSelectorTest'),
  // },
  // {
  //   key: 'AudioToolkit',
  //   category: 'Basic',
  //   module: require('../examples/react-native-audio-toolkit/AudioToolkitTest'),
  // },
  // {
  //   key: 'IdfaAaid',
  //   category: 'Basic',
  //   module: require('../examples/react-native-idfa-aaid/App'),
  // },
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
