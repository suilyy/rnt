import * as React from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import openURLInBrowser from 'react-native/Libraries/Core/Devtools/openURLInBrowser';

type Props = {
  documentationURL: string;
};

const RNTesterDocumentationURL = ({ documentationURL }: Props): React.ReactNode => (
  <TouchableOpacity style={styles.container} onPress={() => openURLInBrowser(documentationURL)}>
    <Image source={require('../assets/documentation.png')} style={styles.icon} />
  </TouchableOpacity>
);

export default RNTesterDocumentationURL;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    right: -15,
  },
  icon: {
    height: 24,
  },
});
