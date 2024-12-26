1.如遇react-native-bootsplash相关报错，报错如下：

```js
npm ERR! command failed
npm ERR! command C:\Windows\system32\cmd.exe /d /s /c (node install/libvips && node install/dll-copy && prebuild-install) || (node install/can-compile && node-gyp rebuild && node install/dll-copy)
npm ERR! sharp: Downloading https://github.com/lovell/sharp-libvips/releases/download/v8.14.5/libvips-8.14.5-win32-x64.tar.br
npm ERR! sharp: Via proxy http://proxynj.huawei.com:8080 with credentials
npm ERR! sharp: Please see https://sharp.pixelplumbing.com/install for required dependencies
npm ERR! sharp: Installation error: self signed certificate in certificate chain
```

- 则需要公网安装，下载@react-native-oh-tpl/react-native-bootsplash该库对应依赖，再进行迁移
- 需要npm配置对应镜像源如下：

```
home=https://npmmirror.com
registry=https://registry.npmmirror.com/
```

- 如果sharp依赖依然安装出现异常，则新增相关如下npm配置：

```
sharp_binary_host=https://npmmirror.com/mirrors/sharp
sharp_libvips_binary_host=https://npmmirror.com/mirrors/sharp-libvips
```

- 本库需要根据其指导文档运行相关命令生产配置文件。
  文档地址：https://gitee.com/react-native-oh-library/usage-docs/blob/master/zh-cn/react-native-bootsplash.md

