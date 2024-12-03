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
    key: 'ReactNativeCalendars',
    category: 'Basic',
    module: require('../examples/react-native-calendars/App'),
  },
  {
    key: 'ReactNativeChartKit',
    category: 'Basic',
    module: require('../examples/react-native-chart-kit/App'),
  },
  {
    key: 'ReactNativeAlipay',
    category: 'Basic',
    module: require('../examples/react-native-alipay/ReactNativeAlipayTest'),
  },
  {
    key: 'ReactNativeDocViewer',
    category: 'Basic',
    module: require('../examples/react-native-doc-viewer/DocViewerTest'),
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
