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
    key: 'react-native-wechat-lib',
    category: 'Tools',
    module: require('../examples/react-native-wechat-lib/App').default,
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
