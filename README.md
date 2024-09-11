# rntpc-tester-native

本工程为 RN 三方库用例集合，首页列表每一项都是一个三方库，详情页则为该库的用例。

<video controls src="https://github.com/user-attachments/assets/092aee35-e474-4f65-aa63-838d9620c454" title="rntpc-tester-native" width="180"></video>

## 安装

```sh
cd tester
npm install
```

## 运行

本工程使用 `react-native-openharmony v0.72.28` 版本，首先需将 RNSDK har 包放置于 `tester/harmony/react_native_openharmony` 文件夹下

> 若本地无 sdk 包，可通过此处[下载](https://github.com/react-native-oh-library/rntpc-tester-native/releases/tag/untagged-51556a6c82c06b610332)

- RN 侧
  - `cd tester`
  - `npm run start / npm run dev`
- Native 侧
  - DevEco Studio 打开 `tester/harmony`
  - 等待 sync 成功后执行 `run`

## 添加用例

用例工程主入口在 `rn-tester/index.tsx`

- 在 examples 目录下新增文件夹，文件夹名字为三方库名
- 文件夹中放各自的用例

  - 用例代码用之前的测试套件即可
  - 每个用例文件需按照如下结构导出

    ```tsx
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
    ```

- 在 `utils/RNTesterList.ts` 的 Components 中添加各自的用例用于导出
