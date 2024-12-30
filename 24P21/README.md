1.如遇react-native-crypto相关报错，需根据其指导文档运行相关脚本命令。
文档地址：https://gitee.com/react-native-oh-library/usage-docs/blob/master/zh-cn/react-native-crypto.md

- 如果当前环境显示异常不能运行脚本，请使用管理员权限打开PowerShell运行如下命令更改策略：

```
Set-ExecutionPolicy RemoteSigned  
```

- 再执行下列脚本，按顺序执行

```
npm i --save-dev rn-nodeify
./node_modules/.bin/rn-nodeify --hack --install
```

- 如果依然出现报错异常，则把上述脚本按顺序再次执行一次即可。
- 如果当前项目运行成功，则可执行下列命令，恢复原先策略

```
Set-ExecutionPolicy Restricted
```

2.如遇Parse-SDK-JS相关报错，需根据其指导文档配置配套的服务。
文档地址：https://gitee.com/react-native-oh-library/usage-docs/blob/master/zh-cn/Parse-SDK-JS.md

3.如遇jpush-react-native相关报错，需根据其指导文档完成极光推送相关的配置。
文档地址：https://gitee.com/react-native-oh-library/usage-docs/blob/master/zh-cn/jpush-react-native.md