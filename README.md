<p align="center">
  <h1 align="center"> <code>rntpc-tester-native</code> </h1>
</p>

本工程为 RN 三方库用例集合，首页列表每一项都是一个三方库，详情页则为该库的用例。

<video controls src="https://github.com/user-attachments/assets/092aee35-e474-4f65-aa63-838d9620c454" title="rntpc-tester-native" width="180"></video>

## 1. 目录结构说明

```sh
rntpc-tester-native
├── 2024-phase1-tester # (丁成杰)-2024(RN-1 期)-润和
├── 2024-phase2-tester # （罗颖）-2024(RN-2 期)
├── 2024-phase3-tester # （何国凯）支撑 4796 应用启动
├── 2024-phase4-tester #（周文斌）支撑 RN 框架 CAPI 平台方案
├── 2024-phase5-tester # (黄腾坤) 支撑 4796 补充需求
├── 2024-phase6-tester # （丁成杰）润和 支撑 top225 应用体验优化
├── README.md
└── tester # 公共工程
```

## 2. 安装

```sh
cd tester
npm install
```

## 3. 运行

### 3.1. 运行前提

1. 本工程使用 `react-native-openharmony v0.72.28` 版本，首先需将 RNSDK har 包放置于 `tester/harmony/react_native_openharmony` 文件夹下

   > 若本地无 sdk 包，可通过此处[下载](https://github.com/react-native-oh-library/rntpc-tester-native/releases/tag/untagged-51556a6c82c06b610332)

2. 为减小工程尺寸，`2024-phasex-tester` 下的 `\harmony\dependencies` 没有 tgz 包，运行该目录的工程需复制 `tester\harmony\dependencies` 下的所有 tgz 包到 `2024-phasex-tester\harmony\dependencies` 中

### 3.2. 运行步骤

- RN 侧
  - `cd tester`
  - `npm run start / npm run dev`
- Native 侧
  - DevEco Studio 打开 `tester/harmony`
  - 等待 sync 成功后执行 `run`

## 4. 添加用例

> tester 目录为公共工程，用例请添加到 `2024-phasex-tester` 文件夹中

用例工程主入口在 `2024-phasex-tester/index.tsx`

- 在 examples 目录下新增文件夹，文件夹名字为三方库名
- 文件夹中放各自的用例

  - 用例代码用之前的测试套件即可
  - 每个用例文件需按照如下结构导出

    ```tsx
    // 使用 export 导出
    export const displayName = "ButtonExample";
    export const framework = "React";
    export const category = "UI";
    export const title = "Button";
    export const documentationURL = "https://reactnative.dev/docs/button";
    export const description = "Simple React Native button component.";

    export const examples = [
      {
        title: "Button with default styling",
        render: function (): any {
          return <ButtonProps />;
        },
      },
    ];

    // 或者使用 export default 导出
    export default {
      displayName: "ButtonExample",
      framework: "React",
      category: "UI",
      title: "react-native-button",
      documentationURL: "https://reactnative.dev/docs/button",
      description: "React Native button",
      examples: [
        {
          title: "react-native-button",
          render: function (): any {
            return <ReactNativeButtonTest />;
          },
        },
      ],
    };
    ```

- 在 `utils/RNTesterList.ts` 的 Components 中添加各自的用例用于导出
  ```js
  const Components: Array<RNTesterModuleInfo> = [
    {
      key: "ButtonExample",
      category: "UI",
      module: require("../examples/Button/ButtonExample"),
    },
    {
      key: "ReactNativeButton",
      category: "Basic",
      // 若使用 export default 导出，这里导入需要加 default
      module: require("../examples/react-native-button/index").default,
    },
    {
      key: "ReactNativeSVG",
      category: "Basic",
      module: require("../examples/react-native-svg/App").default,
    },
  ];
  ```

  在2024-phase5中需要在harmony目录下的build-profile.json5中添加如下配置
  ```js
    products: [
      {
        "buildOption": {
          "strictMode": {
            "useNormalizedOHMUrl": true
          }
        }
      },
    ],
  ```
