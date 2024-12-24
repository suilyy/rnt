import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import{
  Tester,
  TestSuite,
  TestCase,
} from '@rnoh/testerino';

import ImageRotate from "@react-native-oh-tpl/react-native-image-rotate";

const SOURCE_IMAGE = 'https://filesamples.com/samples/image/jpg/sample_640×426.jpg';

class App extends Component {

  constructor() {
    super();
    this.state = {
      image: SOURCE_IMAGE,
      currentAngle: 0,
      width: 150,
      height: 240,
    };

    this.rotate = this.rotate.bind(this);
  }

  rotate(angle) {
    const nextAngle = this.state.currentAngle + angle;
    ImageRotate.rotateImage(
      SOURCE_IMAGE,
      nextAngle,
      (uri) => {
        this.setState({
          image: uri,
          currentAngle: nextAngle,
          width: this.state.height,
          height: this.state.width,
        });
      },
      (error) => {
        console.error(error);
      }
    );
  }

  render() {
    return (
      <Tester style = {styles.container}>
            <TestSuite name = "imageRotateTest">
                <Text>{""}</Text>

                <TextInput>
                    {}
                </TextInput>

                <TestCase
                    itShould = "native rotate CW"
                    tags = {['C_API']}
                    initialState = {undefined as any}
                    arrange = {({setState}) => {
                        return (
                            <TouchableOpacity 
                                onPress = {() => {
                                    this.rotate(90);
                                    setState(true);
                                }}
                                style = {styles.btn}>
                                <Text style = {styles.btnText} > 图片顺旋转 </Text>
                            </TouchableOpacity>
                        );
                    }}
                    assert = {async ({expect, state}) => {
                        expect((state as Buffer)).to.be.true;
                    }} 
                />
                <TestCase
                    itShould = "native rotate CCW"
                    tags = {['C_API']}
                    initialState = {undefined as any}
                    arrange = {({setState}) => {
                        return (
                            <TouchableOpacity 
                                onPress = {() => {
                                    this.rotate(-90);
                                    setState(true);
                                }}
                                style = {styles.btn}>
                                <Text style = {styles.btnText} > 图片逆旋转 </Text>
                            </TouchableOpacity>
                        );
                    }}
                    assert = {async ({expect, state}) => {
                        expect((state as Buffer)).to.be.true;
                    }} 
                /> 
            </TestSuite>
            <View style={styles.imageContainer}>
                <Image style={{width: this.state.width, height: this.state.height}} resizeMode="contain" source={{uri: this.state.image}} />
            </View>
        </Tester>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    height: 240,
    justifyContent: 'center',
  },
  btn: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  btnText: {
    color: 'white',
    fontSize: 16,
},
});


export const displayName = 'react-native-image-rotate'; 
export const framework = 'React';
export const category = 'UI';
export const title = 'react-native-image-rotate';
export const documentationURL = 'https://github.com/react-native-oh-library/RNOHDCS/tree/main/react-native-image-rotate';
export const description = 'React Native image rotate';
export const examples = [
    {
      title: 'React Native image rotate',
      render: function (): any {
        return <App />;
      },
    },
  ];