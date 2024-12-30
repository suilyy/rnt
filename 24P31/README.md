1.如遇react-native-keys相关报错，需根据其指导文档配置DevEco Studio。
文档地址：https://gitee.com/react-native-oh-library/usage-docs/blob/master/zh-cn/react-native-keys.md

2.该库react-native-maps-directions依赖react-native-maps，需要去华为开发者联盟平台申请对应项目和应用程序，请参考指导文档
文档地址：https://gitee.com/react-native-oh-library/usage-docs/blob/master/zh-cn/react-native-maps.md

3.执行reassure这个库，请参考指导文档
文档地址：https://gitee.com/react-native-oh-library/usage-docs/blob/master/zh-cn/reassure.md

4.@klarna/platform-colors 需要手动执行脚本命令，生成文件，请参考指导文档
文档地址：https://gitee.com/react-native-oh-library/usage-docs/blob/master/zh-cn/klarna-platform-colors.md

5.react-native-autocomplete-input 5.5.2的版本在键盘输入字符的时候，键盘自动回收。需要安装指定版本npm install --save react-native-autocomplete-input@5.4.0
文档地址：https://gitee.com/react-native-oh-library/usage-docs/blob/master/zh-cn/react-native-autocomplete-input.md
5.5.2版本其它平台也有此问题，issue地址：https://github.com/byteburgers/react-native-autocomplete-input/issues/307

6.@react-navigation/material-bottom-tabs 的依赖库react-native-paper依赖use-latest-callback会导致报错，需要在rn工程目录下的package.json添加
  "overrides": {
    "use-latest-callback": "^0.2.3"
  }

7.react-native-reanimated 需要按照指导文档安装指定版本
文档地址：https://gitee.com/react-native-oh-library/usage-docs/blob/master/zh-cn/react-native-reanimated.md