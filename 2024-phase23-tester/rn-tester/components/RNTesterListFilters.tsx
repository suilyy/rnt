import React from 'react';

import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const filters = ['Basic', 'UI', 'ListView', 'iOS', 'Android'];

type Props = {
  onFilterButtonPress: (filter: string) => any; //optional only for testing
};

class RNTesterListFilters extends React.Component<Props, { currentFilter: string }> {
  constructor(props: Props) {
    super(props);
    this.state = {
      currentFilter: '',
    };
  }

  filterPressed = filterLabel => {
    const newFilter = this.state.currentFilter === filterLabel ? '' : filterLabel;
    this.setState({
      currentFilter: newFilter,
    });
    this.props.onFilterButtonPress(newFilter);
  };

  render(): any {
    return (
      <View style={styles.container}>
        {filters.map(filterLabel => {
          return (
            <TouchableOpacity
              key={filterLabel}
              style={[
                styles.pillStyle,
                {
                  backgroundColor: this.state.currentFilter === filterLabel ? '#045cfc' : 'white',
                },
              ]}
              onPress={() => this.filterPressed(filterLabel)}>
              <Text
                style={{
                  color: this.state.currentFilter === filterLabel ? 'white' : '#045cfc',
                }}>
                {filterLabel}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pillStyle: {
    padding: 10,
    marginHorizontal: 5,
    marginVertical: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#045cfc',
  },
});

export default RNTesterListFilters;
