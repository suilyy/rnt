// Script for compiling build behavior. It is built in the build plug-in and cannot be modified currently.
// export { hapTasks } from '@ohos/hvigor-ohos-plugin';
import { hapTasks, OhosHapContext, OhosPluginId, Target } from '@ohos/hvigor-ohos-plugin';
import { HvigorPlugin, HvigorNode, getNode } from '@ohos/hvigor';
import { opSqlitePlugin } from './oh_modules/@react-native-oh-tpl/op-sqlite/hvigorfile.ts';

const path = require('path');
const rootRNPackagePath = path.join(__dirname, '../package.json'); //此处根据实际package路径来进行配置

export default {
  system: hapTasks,
  plugins: [opSqlitePlugin(rootRNPackagePath)]
}
