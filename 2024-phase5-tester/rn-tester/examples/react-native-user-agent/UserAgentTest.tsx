import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';
import UserAgent from 'react-native-user-agent';
import { Tester, TestCase } from '@rnoh/testerino';

function UserAgentTest() {
  let userAgent: string = UserAgent.getUserAgent();
  const [webViewUserAgent, setWebViewUserAgent] = useState<string | null>(null);
  useEffect(() => {
    UserAgent.getWebViewUserAgent()
      .then(webViewUserAgent => {
        setWebViewUserAgent(webViewUserAgent);
        console.log(webViewUserAgent);
      })
      .catch(e => {
        console.error('Error getting WebView User Agent:', e);
      });
  }, []);

  return (
    <SafeAreaView>
      <Tester>
        <TestCase itShould='Get user agent synchronously'>
          <Text style={style.text}>同步方式: </Text>
          <Text style={style.text}>{userAgent}</Text>
        </TestCase>

        <TestCase itShould='Get user agent asynchronously'>
          <Text style={style.text}>异步方式: </Text>
          <Text style={style.text}>{webViewUserAgent}</Text>
        </TestCase>

        <TestCase itShould='A set of constants'>
          <Text style={style.text}>常量: </Text>
          <Text style={style.text}>systemName: {UserAgent.systemName}</Text>
          <Text style={style.text}>systemVersion: {UserAgent.systemVersion}</Text>
          <Text style={style.text}>applicationName: {UserAgent.applicationName}</Text>
          <Text style={style.text}>applicationVersion: {UserAgent.applicationVersion}</Text>
          <Text style={style.text}>buildNumber: {UserAgent.buildNumber}</Text>
        </TestCase>
      </Tester>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  text: {
    fontSize: 18
  }
});

export const displayName = 'UserAgentTest';
export const framework = 'React';
export const category = 'UI';
export const title = 'react-native-user-agent';
export const documentationURL = 'https://github.com/react-native-oh-library/RNOHDCS/tree/main/react-native-user-agent';
export const description = 'React Native user agent';

export const examples = [
  {
    title: 'react-native-user-agent',
    render: function (): any {
      return <UserAgentTest />;
    },
  },
];