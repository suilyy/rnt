import { ComponentsScreen } from './screens/ComponentsScreen';
import { ReduxScreen } from './screens/ReduxScreen';
import { SagasScreen } from './screens/SagasScreen';
import { CheckInternetConnectionScreen } from './screens/CheckInternetConnectionScreen';
import { UseIsConnectedScreen } from './screens/UseIsConnectedScreen';
import { View, ScrollView } from 'react-native';
import { NetworkProvider } from 'react-native-offline';

//react-native-offline demo入口
export const OfflineDemoTest = () => {
    return (
        <ScrollView>
            <View>
                <ComponentsScreen></ComponentsScreen>
                <ReduxScreen></ReduxScreen>
                <SagasScreen></SagasScreen>
                <CheckInternetConnectionScreen></CheckInternetConnectionScreen>
                <NetworkProvider pingServerUrl='https://www.baidu.com'>
                    <UseIsConnectedScreen></UseIsConnectedScreen>
                </NetworkProvider>
            </View>
        </ScrollView>
    );
};

// 使用 export 导出
export const displayName = "OfflineExample";
export const framework = "React";
export const category = "UI";
export const title = "react-native-offline";
export const documentationURL = "https://github.com/rgommezz/react-native-offline";
export const description = "Simple React Native offline component.";

export const examples = [
  {
    title: "Offline with default styling",
    render: function (): any {
      return <OfflineDemoTest />;
    },
  },
];