import React, {useEffect} from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    View,
  } from 'react-native';
  import {NavigationContainer, Page} from './component/Navigation';
  import ParseExample from './ParseExample';
  import MoreExample from './MoreExample';

  function App() {
    return (
      <View style={{backgroundColor: 'black'}}>
        <StatusBar barStyle="light-content" />
        <SafeAreaView>
          <NavigationContainer>
              <Page name="ParseExample">
                <ParseExample />
              </Page>
              <Page name="MoreExample">
                <MoreExample />
              </Page>
          </NavigationContainer>
        </SafeAreaView>
      </View>
    );
  }
  
  export default App;


  // 使用 export 导出
export const displayName = "ParseExample";
export const framework = "React";
export const category = "Basic";
export const title = "Parse-SDK-JS";
export const documentationURL = "https://github.com/parse-community/Parse-SDK-JS";
export const description = "Simple React Native Parse SDK JS component.";

export const examples = [
  {
    title: "Parse-SDK-JS",
    render: function (): any {
      return <App />;
    },
  },
];