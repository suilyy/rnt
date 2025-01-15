- 第一步在npm install的时候，后面加上  --legacy-peer-deps这个命令
- 第二步在执行harmony工程之前，需要将下面这段代码放到build-profile.json5文件中显示字段为products中含有name字眼的上面

  ```
  buildOption: {
    strictMode: {
      useNormalizedOHMUrl: true
    }
  },
  
  ```

