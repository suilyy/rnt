- 第一步在npm install的时候，后面加上  --legacy-peer-deps这个命令（使用华为的镜像源）

- 第二步需要按照指导文档装react-native-reanimated[https://gitee.com/react-native-oh-library/usage-docs/blob/master/zh-cn/react-native-reanimated.md] 和react-native-svg[https://gitee.com/react-native-oh-library/usage-docs/blob/master/zh-cn/react-native-svg-capi.md]这两个库

- 第三步在执行harmony工程之前，需要将下面这段代码放到build-profile.json5文件中显示字段为products中含有name字眼的上面

  ```
  buildOption: {
    strictMode: {
      useNormalizedOHMUrl: true
    }
  },
  
  ```

