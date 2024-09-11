import * as React from 'react';
import { StyleSheet, Text } from 'react-native';
import { RNTesterThemeContext } from './RNTesterTheme';

type Props = any;

class RNTesterComponentTitle extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <RNTesterThemeContext.Consumer>
        {theme => (
          <Text style={[styles.titleText, { color: theme.LabelColor }]}>{this.props.children}</Text>
        )}
      </RNTesterThemeContext.Consumer>
    );
  }
}

const styles = StyleSheet.create({
  titleText: {
    fontSize: 20,
    fontWeight: '400',
    marginBottom: 5,
  },
});

export default RNTesterComponentTitle;
