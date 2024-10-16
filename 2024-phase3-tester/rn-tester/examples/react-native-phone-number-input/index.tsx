import * as React from 'react';
import { Button, ScrollView, View, Text } from 'react-native';
// import {NavigationContainer, ParamListBase} from '@react-navigation/native';
// import {createStackNavigator, StackScreenProps} from '@react-navigation/stack';
import { NavigationContainer, Page } from '../../components/Navigation';
import { PNIPropsDemo } from './PNIPropsDemo';
import { Disable } from './Disable';

// const Stack = createStackNavigator();

function HomePage({ navigation }) {
  return (
    <View style={{ backgroundColor: 'pink' }}>
      <Button
        title="Disable属性"
        onPress={() => {
          navigation.navigate('Disable');
        }}
      />
      <Button
        title="除去Disable属性以外的所有属性"
        onPress={() => {
          navigation.navigate('PNIPropsDemo');
        }}
      />
    </View>
  );
}

const PhoneDemo = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#333' }}>
      {/* <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="HomePage" component={HomePage} />
          <Stack.Screen name="PNIPropsDemo" component={PNIPropsDemo} />
          <Stack.Screen name="Disable" component={Disable} />
        </Stack.Navigator>
      </NavigationContainer> */}
      <NavigationContainer>
        <Page name="Disable属性">
          <Disable />
        </Page>
        <Page name="除去Disable属性以外的所有属性">
          <PNIPropsDemo />
        </Page>
      </NavigationContainer>
    </View>
  );
};

export const displayName = 'PhoneDemo';
export const framework = 'React';
export const category = 'UI';
export const title = 'PhoneNumberInput';
export const documentationURL = 'https://reactnative.dev/docs/button';
export const description = 'React Native Phone Number Input.';

export const examples = [
  {
    title: 'React Native PhoneNumberInput',
    render: function (): any {
      return <PhoneDemo />;
    },
  },
];
