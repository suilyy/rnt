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
    key: 'ReactNativePerformance',
    category: 'UI',
    module: require('../examples/react-native-performance/index'),
  },
  {
    key: 'ReactNativeMaterialMenu',
    category: 'Basic',
    module: require('../examples/react-native-material-menu/ReactNativeMaterialMenuDemo'),
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
