import React from 'react';
import {
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import VideoPlayer from 'react-native-video-controls'
import { Tester, TestCase, TestSuite } from '@rnoh/testerino';
import { NavigationContainer } from '@react-navigation/native';

function VideoControlsTest(){
  const PALETTE = { REACT_CYAN_LIGHT: 'hsl(193, 95%, 68%)', REACT_CYAN_DARK: 'hsl(193, 95%, 30%)'};
  const Stack = createStackNavigator();
    function VideoTestFirstGroup({navigation}) {
      return (
      <ScrollView style={styles.scollvewcontainer}>
        <Tester>
          <TestSuite name='default properties'>
            <TestCase itShould="test VideoPlayer official web video">
              <VideoPlayer
                controlTimeout = {160000}
                source = {{uri: 'https://vjs.zencdn.net/v/oceans.mp4'}}
                style = {styles.video}
                paused = {true}
                title = "oceans"
              /> 
            </TestCase>
          </TestSuite>
         
         <TestSuite name = 'First Group properties' >
           <TestCase itShould="test VideoPlayer toggleResizeModeOnFullscreen properties and set value false">
             <VideoPlayer 
                controlTimeout = {160000}
                toggleResizeModeOnFullscreen={false}
                style = {styles.video}
                source={{uri: 'https://vjs.zencdn.net/v/oceans.mp4'}}
                paused = {true}
              /> 
            </TestCase>
            <TestCase itShould="test VideoPlayer toggleResizeModeOnFullscreen properties and set value true">
              <VideoPlayer
                controlTimeout = {160000}
                toggleResizeModeOnFullscreen={true}
                style = {styles.video}
                source={{uri: 'https://vjs.zencdn.net/v/oceans.mp4'}}
                paused = {true}
              /> 
            </TestCase>
            <TestCase itShould="test VideoPlayer showOnStart properties and set value false">
              <VideoPlayer
                style = {styles.video}
                controlTimeout = {160000}
                showOnStart={false}
                source={{uri: 'https://vjs.zencdn.net/v/oceans.mp4'}}
                paused = {true}
              /> 
            </TestCase>
            <TestCase itShould="test VideoPlayer showOnStart properties and set value true">
              <VideoPlayer
                style = {styles.video}
                controlTimeout = {160000}
                showOnStart={true}
                source={{uri: 'https://vjs.zencdn.net/v/oceans.mp4'}}
                paused = {true}
              /> 
            </TestCase>
            <TestCase itShould="test VideoPlayer navigator properties and set value navigation">
                <VideoPlayer
                  style = {styles.video}
                  navigator={navigation}
                  source={{uri: 'https://vjs.zencdn.net/v/oceans.mp4'}}
                  paused = {true}
                />
              </TestCase>
          </TestSuite>
        </Tester>
      </ScrollView>
      );
    }

    function VideoTestSecondGroup() {
      return(
        <ScrollView style={styles.scollvewcontainer}>
          <Tester>
            <TestSuite name = 'Second Group Properties'>
              <TestCase itShould="test VideoPlayer controlAnimationTiming properties and set value 5000">
                <VideoPlayer
                  style = {styles.video}
                  controlAnimationTiming={5000}
                  source={{uri: 'https://vjs.zencdn.net/v/oceans.mp4'}}
                  paused = {true}
                />
              </TestCase>
              <TestCase itShould="test VideoPlayer doubleTapTime properties and set value 2000">
                <VideoPlayer
                  style = {styles.video}
                  doubleTapTime={2000}
                  source={{uri: 'https://vjs.zencdn.net/v/oceans.mp4'}}
                  paused = {true}    
                /> 
              </TestCase>
              <TestCase itShould="test VideoPlayer scrubbing properties and set value 1000">
                <VideoPlayer
                  style = {styles.video}
                  scrubbing={1000}
                  source={{uri: 'https://vjs.zencdn.net/v/oceans.mp4'}}
                  paused = {true}    
                /> 
              </TestCase>
              <TestCase itShould="test VideoPlayer controlTimeout properties and set value 1000">
                <VideoPlayer
                  style = {styles.video}
                  controlTimeout ={1000}
                  source={{uri: 'https://vjs.zencdn.net/v/oceans.mp4'}} 
                  paused = {true}   
                /> 
              </TestCase>
              <TestCase itShould="test VideoPlayer videoStyle properties and set value {width=50%,heigth=50%}">
                <VideoPlayer
                  style = {styles.video}
                  controlTimeout = {160000}
                  videoStyle={styles.videostyleone}
                  source={{uri: 'https://vjs.zencdn.net/v/oceans.mp4'}} 
                  paused = {true}   
                /> 
              </TestCase>
              <TestCase itShould="test VideoPlayer style properties and set value {width=90%,heigth=75%}">
                <VideoPlayer
                  controlTimeout = {160000}
                  style={styles.videostyletwo}
                  source={{uri: 'https://vjs.zencdn.net/v/oceans.mp4'}}   
                  paused = {true} 
                />
              </TestCase>
            </TestSuite>
          </Tester>
        </ScrollView>
      );
    }

    function VideoTestThirdGroup() {
      return(
        <ScrollView style={styles.scollvewcontainer}>
          <Tester>
            <TestSuite name = 'Thrid Group Properties'>
              <TestCase itShould="test VideoPlayer seekColor properties and set value #00F5FF">
                <VideoPlayer
                  style = {styles.video}
                  controlTimeout = {160000}
                  seekColor={'#00F5FF'}
                  source={{uri: 'https://vjs.zencdn.net/v/oceans.mp4'}} 
                  paused = {true}   
                /> 
              </TestCase>
              <TestCase itShould="test VideoPlayer tapAnywhereToPause properties and set value true">
                <VideoPlayer
                  style = {styles.video}
                  controlTimeout = {160000}
                  tapAnywhereToPause={true}
                  source={{uri: 'https://vjs.zencdn.net/v/oceans.mp4'}}  
                  paused = {true}
                /> 
              </TestCase>
              <TestCase itShould="test VideoPlayer tapAnywhereToPause properties and set value false">
                <VideoPlayer
                  style = {styles.video}
                  controlTimeout = {160000}
                  tapAnywhereToPause={false}
                  source={{uri: 'https://vjs.zencdn.net/v/oceans.mp4'}}    
                  paused = {true}
                /> 
              </TestCase>
              <TestCase itShould="test VideoPlayer disableFullscreen properties and set value true">
                <VideoPlayer
                  style = {styles.video}
                  controlTimeout = {160000}
                  disableFullscreen={true}
                  paused = {true}
                  source = {{uri: 'https://vjs.zencdn.net/v/oceans.mp4'}}
                /> 
              </TestCase>
              <TestCase itShould="test VideoPlayer disableFullscreen properties and set value false">
                <VideoPlayer
                  style = {styles.video}
                  controlTimeout = {160000}
                  disableFullscreen={false}
                  paused = {true}
                  source = {{uri: 'https://vjs.zencdn.net/v/oceans.mp4'}}
                /> 
              </TestCase>
              <TestCase itShould="test VideoPlayer disablePlayPause properties and set value true">
                <VideoPlayer
                  style = {styles.video}
                  controlTimeout = {160000}
                  disablePlayPause={true}
                  paused = {true} 
                  source = {{uri: 'https://vjs.zencdn.net/v/oceans.mp4'}}
                /> 
              </TestCase>
            </TestSuite>
          </Tester>
        </ScrollView>
      );
    }

    function VideoTestGroupFour() {
      return(
        <ScrollView style={styles.scollvewcontainer}>
          <Tester>
            <TestSuite name = 'Group Four Properties'>
              <TestCase itShould="test VideoPlayer disablePlayPause properties and set value false">
                <VideoPlayer
                  style = {styles.video}
                  controlTimeout = {160000}
                  disablePlayPause={false}
                  paused = {true} 
                  source = {{uri: 'https://vjs.zencdn.net/v/oceans.mp4'}}
                /> 
              </TestCase>
              <TestCase itShould="test VideoPlayer disableSeekbar properties and set value true">
                <VideoPlayer
                  style = {styles.video}
                  controlTimeout = {160000}
                  disableSeekbar={true}
                  paused = {true}   
                  source = {{uri: 'https://vjs.zencdn.net/v/oceans.mp4'}}
                /> 
              </TestCase>
              <TestCase itShould="test VideoPlayer disableSeekbar properties and set value false">
                <VideoPlayer
                  style = {styles.video}
                  controlTimeout = {160000}
                  disableSeekbar={false}
                  paused = {true}   
                  source = {{uri: 'https://vjs.zencdn.net/v/oceans.mp4'}}
                /> 
              </TestCase>
              <TestCase itShould="test VideoPlayer disableVolume properties and set value true">
                <VideoPlayer
                  style = {styles.video}
                  controlTimeout = {160000}
                  disableVolume={true}
                  paused = {true}
                  source = {{uri: 'https://vjs.zencdn.net/v/oceans.mp4'}}
                /> 
              </TestCase>
              <TestCase itShould="test VideoPlayer disableVolume properties and set value false">
                <VideoPlayer
                  style = {styles.video}
                  controlTimeout = {160000}
                  disableVolume={false}
                  paused = {true}
                  source = {{uri: 'https://vjs.zencdn.net/v/oceans.mp4'}}
                /> 
              </TestCase>
              <TestCase itShould="test VideoPlayer disableTimer properties and set value true">
                <VideoPlayer
                  style = {styles.video}
                  controlTimeout = {160000}
                  disableTimer={true}
                  paused = {true}
                  source = {{uri: 'https://vjs.zencdn.net/v/oceans.mp4'}}
                /> 
              </TestCase>
            </TestSuite>
          </Tester>
        </ScrollView>
      );
    }

    function VideoTestGroupFive() {
      return(
        <ScrollView style={styles.scollvewcontainer}>
          <Tester>
            <TestSuite name = 'Group Five Properties'>
              <TestCase itShould="test VideoPlayer disableTimer properties and set value false">
                <VideoPlayer
                  style = {styles.video}
                  controlTimeout = {160000}
                  disableTimer={false}
                  paused = {true}
                  source = {{uri: 'https://vjs.zencdn.net/v/oceans.mp4'}}
                />
              </TestCase>
              <TestCase itShould="test VideoPlayer disableBack properties and set value true">
                <VideoPlayer
                  style = {styles.video}
                  controlTimeout = {160000}
                  disableBack={true}
                  paused = {true}
                  source = {{uri: 'https://vjs.zencdn.net/v/oceans.mp4'}}
                /> 
              </TestCase>
              <TestCase itShould="test VideoPlayer disableBack properties and set value false">
                <VideoPlayer
                  style = {styles.video}
                  controlTimeout = {160000}
                  disableBack={false}
                  paused = {true}
                  source = {{uri: 'https://vjs.zencdn.net/v/oceans.mp4'}}
                /> 
              </TestCase>
            </TestSuite>
            <TestSuite name='onPress'>
              <TestCase itShould="test VideoPlayer onEnterFullscreen event function"
                assert={({ expect, state }) => {
                  expect(state).to.be.true;
                }}
                initialState={false}
                tags={['C_API']}
                arrange={({ setState }) => {
                  return (
                    <VideoPlayer
                      style = {styles.video}
                      controlTimeout = {160000}
                      onEnterFullscreen = {()=>{
                        setState(true);
                        alert('onEnterFullscreen event run success!');
                      }}
                      source={{uri: 'https://vjs.zencdn.net/v/oceans.mp4'}}    
                      paused = {true}
                    />
                  )
                }}
              >
              </TestCase>
              <TestCase itShould="test VideoPlayer onExitFullscreen event function"
                assert={({ expect, state }) => {
                  expect(state).to.be.true;
                }}
                initialState={false}
                tags={['C_API']}
                arrange={({ setState }) => {
                  return (
                    <VideoPlayer
                      style = {styles.video}
                      controlTimeout = {160000}
                      onExitFullscreen = {()=>{
                        setState(true);
                        alert('onExitFullscreen event run success!');
                      }}
                      source={{uri: 'https://vjs.zencdn.net/v/oceans.mp4'}}    
                      paused = {true}
                    />
                  )
                }}
              >
              </TestCase>
              <TestCase itShould="test VideoPlayer onHideControls event function"
                assert={({ expect, state }) => {
                  expect(state).to.be.true;
                }}
                initialState={false}
                tags={['C_API']}
                arrange={({ setState }) => {
                  return (
                    <VideoPlayer
                      style = {styles.video}
                      controlTimeout = {160000}
                      onHideControls = {()=>{
                        setState(true);
                        alert('onHideControls event run success!');
                      }}
                      source={{uri: 'https://vjs.zencdn.net/v/oceans.mp4'}}    
                      paused = {true}
                    />
                  )
                }}
              >
              </TestCase>
            </TestSuite>
          </Tester>
        </ScrollView>
      );
    }

    function VideoTestGroupSix() {
      return(
        <ScrollView style={styles.scollvewcontainer}>
          <Tester>
            <TestSuite name = 'Group Six Properties'>
              <TestCase itShould="test VideoPlayer onShowControls event function"
                assert={({ expect, state }) => {
                  expect(state).to.be.true;
                }}
                initialState={false}
                tags={['C_API']}
                arrange={({ setState }) => {
                  return (
                    <VideoPlayer
                      style = {styles.video}
                      controlTimeout = {160000}
                      onShowControls = {()=>{
                        setState(true);
                        alert('onShowControls event run success!');
                      }}
                      source={{uri: 'https://vjs.zencdn.net/v/oceans.mp4'}}    
                      paused = {true}
                    />
                  )
                }}
              >
              </TestCase>
              <TestCase itShould="test VideoPlayer onError event function"
                assert={({ expect, state }) => {
                  expect(state).to.be.true;
                }}
                initialState={false}
                tags={['C_API']}
                arrange={({ setState }) => {
                  return (
                    <VideoPlayer
                      style = {styles.video}
                      controlTimeout = {160000}
                      onError = {()=>{
                        setState(true);
                        alert('onError event run success!');
                      }}
                      source={{uri: 'https://vjs.zencdn.net'}}    
                      paused = {true}
                    />
                  )
                }}
              >
              </TestCase>
              <TestCase itShould="test VideoPlayer onPause event function"
                assert={({ expect, state }) => {
                  expect(state).to.be.true;
                }}
                initialState={false}
                tags={['C_API']}
                arrange={({ setState }) => {
                  return (
                    <VideoPlayer
                      style = {styles.video}
                      controlTimeout = {160000}
                      onPause = {()=>{
                        setState(true);
                        alert('onPause event run success!');
                      }}
                      source={{uri: 'https://vjs.zencdn.net/v/oceans.mp4'}}    
                      paused = {true}
                    />
                  )
                }}
              >
              </TestCase>
              <TestCase itShould="test VideoPlayer onPlay event function"
                assert={({ expect, state }) => {
                  expect(state).to.be.true;
                }}
                initialState={false}
                tags={['C_API']}
                arrange={({ setState }) => {
                  return (
                    <VideoPlayer
                      style = {styles.video}
                      controlTimeout = {160000}
                      onPlay = {()=>{
                        setState(true);
                        alert('onPlay event run success!');
                      }}
                      source={{uri: 'https://vjs.zencdn.net/v/oceans.mp4'}}    
                      paused = {true}
                    />
                  )
                }}
              >
              </TestCase>
              <TestCase itShould="test VideoPlayer onBack event function"
                assert={({ expect, state }) => {
                  expect(state).to.be.true;
                }}
                initialState={false}
                tags={['C_API']}
                arrange={({ setState }) => {
                  return (
                    <VideoPlayer
                      style = {styles.video}
                      controlTimeout = {160000}
                      onBack = {()=>{
                        setState(true);
                        alert('onBack event run success!');
                      }}
                      source={{uri: 'https://vjs.zencdn.net/v/oceans.mp4'}}    
                      paused = {true}
                  />
                )
              }}
              >
              </TestCase>
              <TestCase itShould="test VideoPlayer onEnd event function"
                assert={({ expect, state }) => {
                  expect(state).to.be.true;
                }}
                initialState={false}
                tags={['C_API']}
                arrange={({ setState }) => {
                  return (
                    <VideoPlayer
                      style = {styles.video}
                      controlTimeout = {160000}
                      onEnd = {()=>{
                        setState(true);
                        alert('onEnd event run success!');
                      }}
                      source={{uri: 'https://vjs.zencdn.net/v/oceans.mp4'}}    
                      paused = {true}
                    />
                  )
                }}
              >
              </TestCase>
            </TestSuite>
          </Tester>
        </ScrollView>
      );
    }

    function HomeScreen({ navigation: { navigate } }) {
      return ( 
          <View style={styles.buttonContainer}>  

            <TouchableOpacity style={{  width: '100%'}}  onPress={() => navigate('VideoTestFirstGroup')}>  
              <View style={styles.borderedView}>
                <Text style={styles.buttonText}>Video Player Test First Group</Text>  
              </View>
            </TouchableOpacity>  
             
            <TouchableOpacity style={{  width: '100%'}} onPress={() => navigate('VideoTestSecondGroup')}>  
            <View style={styles.borderedView}>
              <Text style={styles.buttonText}>Video Player Test Second Group</Text>  
              </View>
            </TouchableOpacity>  
            <TouchableOpacity style={{  width: '100%'}} onPress={() => navigate('VideoTestThirdGroup')}>  
            <View style={styles.borderedView}>
              <Text style={styles.buttonText}>Video Player Test Third Group</Text>  
              </View>
            </TouchableOpacity>  
            <TouchableOpacity style={{  width: '100%'}} onPress={() => navigate('VideoTestGroupFour')}>  
            <View style={styles.borderedView}>
              <Text style={styles.buttonText}>Video Player Test Group Four</Text>  
              </View>
            </TouchableOpacity>  
            <TouchableOpacity style={{  width: '100%'}} onPress={() => navigate('VideoTestGroupFive')}>  
            <View style={styles.borderedView}>
              <Text style={styles.buttonText}>Video Player Test Group Five</Text>  
              </View>
            </TouchableOpacity>  
            <TouchableOpacity style={{  width: '100%'}} onPress={() => navigate('VideoTestGroupSix')}>  
            <View style={styles.borderedView}>
              <Text style={styles.buttonText}>Video Player Test Group Six</Text>  
              </View>
            </TouchableOpacity>  
          </View>  
      );
    }

    return(
       <NavigationContainer>
          <Stack.Navigator initialRouteName="VideoPlayer Props Test">
            <Stack.Screen name="VideoPlayer Props Test" component={HomeScreen} />
            <Stack.Screen name="VideoTestFirstGroup" component={VideoTestFirstGroup} />
            <Stack.Screen name="VideoTestSecondGroup" component={VideoTestSecondGroup} />
            <Stack.Screen name="VideoTestThirdGroup" component={VideoTestThirdGroup} />
            <Stack.Screen name="VideoTestGroupFour" component={VideoTestGroupFour} />
            <Stack.Screen name="VideoTestGroupFive" component={VideoTestGroupFive} />
            <Stack.Screen name="VideoTestGroupSix" component={VideoTestGroupSix} />
          </Stack.Navigator>
        </NavigationContainer>
    );
  }

  const styles = StyleSheet.create({
    borderedView: {
      borderWidth: 1,
      borderColor: 'blue', // 设置边框颜色
      // padding: 10, // 可选，设置内边距
    },
    scollvewcontainer: {
      width: '100%',
      height: '100%', 
    },
    video: {  
      width: '100%',  
      height: 200,  
    }, 
    videostyleone: {
      width: '50%',
      height: '50%',
    },
    videostyletwo: {
      width: '90%',
      height: 150,
    },
    buttonText: {
      width: '100%',
      fontWeight: 'bold',
      paddingHorizontal: 16,
      paddingVertical: 24,
      color: 'white',
      backgroundColor: 'black',
      flex: 1
    },
    container: {  
      flex: 1,  
      justifyContent: 'center',  
      alignItems: 'center',  
      backgroundColor: '#f8f8f8', // 背景色  
      padding: 20,  
    },  
    title: {  
      fontSize: 24,  
      fontWeight: 'bold',  
      marginBottom: 40,  
      color: '#333', // 标题颜色  
    },  
    buttonContainer: {  
      width: '100%',  
      alignItems: 'flex-start',  
    },  
    button: {  
      backgroundColor: '#007bff', // 按钮背景色  
      borderRadius: 5,  
      padding: 15,  
      marginVertical: 10,  
      width: '100%', // 按钮占满宽度  
      alignItems: 'center',  
      elevation: 3, // Android 阴影效果  
      shadowColor: '#000', // iOS 阴影效果  
      shadowOffset: { width: 0, height: 2 },  
      shadowOpacity: 0.2,  
      shadowRadius: 2,  
    },    
  });

  
export default VideoControlsTest;

export const displayName = 'VideoControlsTest';
export const framework = 'React';
export const category = 'UI';
export const title = 'react-native-video-controls';
export const documentationURL = 'https://github.com/itsnubix/react-native-video-controls';
export const description = 'React Native video controls';

export const examples = [
  {
    title: 'react-native-video-controls',
    render: function (): any {
      return <VideoControlsTest />;
    },
  },
];