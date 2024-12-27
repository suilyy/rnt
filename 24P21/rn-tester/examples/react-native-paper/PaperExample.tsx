
import { PaperProvider,MD3LightTheme as DefaultTheme,} from 'react-native-paper';
import App from './App';

const theme = {
  ...DefaultTheme,
  // Specify custom property
  myOwnProperty: true,
  // Specify custom property in nested object
  colors: {
    ...DefaultTheme.colors,
    myOwnColor: '#BADA55',
  },
};

export default function PaperExample() {
    return (
      <PaperProvider theme={theme}>
        <App />
      </PaperProvider>
    );
}

// 使用 export 导出
export const displayName = "PaperExample";
export const framework = "React";
export const category = "UI";
export const title = "react-native-paper";
export const documentationURL = "https://github.com/callstack/react-native-paper";
export const description = "Simple React Native paper component.";

export const examples = [
  {
    title: "Paper with default styling",
    render: function (): any {
      return <PaperExample />;
    },
  },
];