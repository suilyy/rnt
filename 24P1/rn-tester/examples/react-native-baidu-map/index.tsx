import { View, Text, StyleSheet, Button } from 'react-native';
import React, { useState, useMemo, useCallback } from 'react';
import App from './BaiduMapExample';
import {BaiduMapPropTest} from './BaiduMapPropTest'
import {BaiduMapCombinationUseTest} from './BaiduMapCombinationUseTest';

interface IDemoItem {
  name: string;
  key: string;
  Component: () => React.JSX.Element
}

type TDemoCliCk = (item: IDemoItem) => void

const demos: IDemoItem[] = [
  { Component: App, name: 'BaiduMap', key: 'BaiduMapTest' },
  { Component: BaiduMapPropTest, name: 'BaiduMapProp', key: 'BaiduMapPropTest' },
  { Component: BaiduMapCombinationUseTest, name: 'BaiduMapCombinationUse', key: 'BaiduMapCombinationUseTest' }
];

function BaiduMapEntrance() {
  const [currentDemoKey, setCurrentDemoKey] = useState('');

  const demoNavClickHandle = useCallback<TDemoCliCk>(
    (item) => setCurrentDemoKey(item.key),
    []
  );
  const backClickHandle = useCallback(() => setCurrentDemoKey(''), []);

  const currentDemo = useMemo(() => {
    const target = demos.find((item) => item.key === currentDemoKey);
    console.log(target && target.key);
    if (target) return <target.Component />;
    return <Text>Select Demo</Text>;
  }, [currentDemoKey]);
  const demoMenu = useMemo(
    () =>
      demos.map((item, index) => (
        <Text
          style={styles.navItem}
          key={item.key}
          onPress={() => demoNavClickHandle(item)}>
          {index + 1}. {item.name}
        </Text>
      )),
    []
  );

  return (
    <View style={styles.container}>

      <View style={styles.demoNav}><Text></Text>{demoMenu}</View>
      {currentDemoKey && <View style={styles.demoPanel}>{currentDemo}</View>}
      {currentDemoKey && (
        <View style={styles.backButtonPanel}>
          <Button title="Back" onPress={() => backClickHandle()}></Button>
        </View>
      )}
    </View>
  );
}

export default {
  displayName: "BaiduMapDemo",
  framework: "React",
  category: "Map",
  title: "BaiduMapDemo",
  documentationURL: "https://gitee.com/react-native-oh-library/usage-docs/blob/master/zh-cn/react-native-baidu-map.md",
  description: "百度地图组件",
  examples: [
    {
      title: "baidu-map",
      render: function (): any {
        return <BaiduMapEntrance />;
      },
    },
  ],
};



const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  demoNav: {
    padding: 30,
    paddingTop: 50
  },
  navItem: {
    fontSize: 16,
    color: '#fff',
    padding: 6,
    textAlign: "center",
    justifyContent: "center",
    textAlignVertical: "center",
    backgroundColor: "blue",
    width: '100%',
    height: 60,
    borderRadius: 45,
    marginTop: 20
  },
  demoPanel: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    zIndex: 99,
    elevation: 99,
    backgroundColor: 'rgba(255,255,255, 1)',
  },
  backButtonPanel: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    zIndex: 100,
    elevation: 100,
    width: 150,
    paddingBottom: 10,
    alignItems: 'center'
  },
});