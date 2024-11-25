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
    key: 'react-native-waterflow-list',
    category: 'UI',
    module: require('../examples/react-native-waterflow-list/wateflowListDemo').default,
  },
  {
    key: 'realm-js',
    category: '数据库',
    module: require('../examples/realm-js/demoIndex').default,
  },
  {
    key: 'react-native-ssl-pinning',
    category: 'NetWork',
    module: require('../examples/react-native-ssl-pinning/SslPinningDemo').default,
  },
  {
    key: 'rn-bugly',
    category: 'Tools',
    module: require('../examples/rn-bugly/BuglyDemo').default,
  },
  {
    key: 'react-native-search-bar',
    category: 'UI',
    module: require('../examples/react-native-search-bar/demo/search-bar').default,
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
