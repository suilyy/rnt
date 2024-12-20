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
    module: require('../examples/react-native-button/index').default,
  },
  {
    key: 'ReactNativeSVG',
    category: 'Basic',
    module: require('../examples/react-native-svg/App').default,
  },
  {
    key: 'ReactNativeGiftedCharts',
    category: 'UI',
    module: require('../examples/react-native-gifted-charts/App'),
  },
  {
    key: 'ReactNativeSvgCharts',
    category: 'UI',
    module: require('../examples/react-native-svg-charts/App'),
  },
  {
    key: 'GalioFramework',
    category: 'Basic',
    module: require('../examples/galio-framework/APP'),
  },
  {
    key: 'ReactNativeTypography',
    category: 'UI',
    module: require('../examples/react-native-typography/index'),
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
