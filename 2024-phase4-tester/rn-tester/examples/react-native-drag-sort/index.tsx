import React from 'react';
import {View} from 'react-native';
import {NavigationContainer, Page} from './components/Navigation';
import * as testSuiteByName from './App';

const comList = Object.keys(testSuiteByName).map(testSuiteName => {
  return {
    name: testSuiteName,
    com: testSuiteByName[testSuiteName as keyof typeof testSuiteByName],
  };
});
// @ts-ignore
comList.sort((a, b) => {
  return a.name.localeCompare(b.name);
});

export function DragSortTestDemo() {
  return (
    <View style={{backgroundColor: 'black'}}>
      <NavigationContainer>
        {Object.entries(testSuiteByName).map(([Name, Comp]) => {
          return (
            <Page key={Name} name={Name}>
              <Comp />
            </Page>
          );
        })}
      </NavigationContainer>
    </View>
  );
}
export default DragSortTestDemo;


export const displayName = 'DragSortTestDemo';
export const framework = 'React';
export const category = 'basic';
export const title = 'DragSortTestDemo';
export const documentationURL = 'https://gitee.com/react-native-oh-library/usage-docs/blob/master/zh-cn/react-native-drag-sort.md';
export const description = 'DragSortTestDemo';

export const examples = [
    {
        title: 'DragSortTestDemo',
        render: function (): any {
            return <DragSortTestDemo />;
        },
    },
];