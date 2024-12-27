- 第一步在npm install的时候，后面加上  --legacy-peer-deps这个命令（使用华为的镜像源）

- 第二步在执行npm run dev的时候，如果是遇到了关于react-native-reanimated的问题就需要将这个库卸载掉，再装react-native-reanimated@3.6.0的版本就可以

- 第三步在执行harmony工程之前，需要将下面这段代码放到build-profile.json5文件中显示字段为products中含有name字眼的上面

  ```
  buildOption: {
    strictMode: {
      useNormalizedOHMUrl: true
    }
  },
  ```

