import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FileUpload from 'react-native-fileupload';
import Toast from '@remobile/react-native-toast';

class FileUploadDemo extends Component {

  componentDidMount () {
    var obj = {
        uploadUrl: 'http://47.108.234.230:9990/upload',
        method: 'POST',
        headers: {
          
          'Content-Type': 'multipart/form-data',
        },
        fields: {
          name: 'hello',value: 'world',
      },
      files: [
        {
          name: 'file',// optional
          filename: 'assets_placeholder2000x2000.jpg',
          filepath: '/xxx/assets_placeholder2000x2000.jpg',
          filetype: 'jpg',// optional
        },
        {
          filename: 'one.w4a',
          filepath: '/xxx/one.w4a', 
          filetype: 'audio/x-m4a',// optional
        },
      ]
    };
    FileUpload.upload(obj, function(err,result) {
      console.log("upload",err,result);
      if(err || result) {
        Toast.showShortCenter(err + result)
      }
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
      </View>
    );
  }
}

export default {
  displayName: "FileUploadDemo",
  framework: "React",
  category: "Tools",
  title: "FileUploadDemo",
  documentationURL: "https://gitee.com/react-native-oh-library/usage-docs/blob/master/zh-cn/react-native-fileupload.md",
  description: "文件上传组件",
  examples: [
    {
      title: "react-native-fileupload",
      render: function (): any {
        return <FileUploadDemo />;
      },
    },
  ],
};


let styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});