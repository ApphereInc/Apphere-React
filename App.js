import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Alert, TouchableOpacity } from 'react-native';

class RoundedButton extends Component {
	render() {
		return (
		  <TouchableOpacity style={[styles.button, this.props.style]} backgroundColor="#fff" onPress={() => this.props.onPress()}>
			  <Text style={styles.buttonTitle}>{this.props.title}</Text>
		  </TouchableOpacity>
		);
	}
}

export default class App extends React.Component {
  onPressButton(title) {
    Alert.alert('You tapped the button: ' + title)
  }

  render() {
    return (
      <View style={styles.container}>
        <RoundedButton title="Food" style={{backgroundColor: "#539EF6"}} onPress={() => {this.onPressButton("Food")}}/>
        <RoundedButton title="Drinks" style={{backgroundColor: "#2A23D2"}} onPress={() => {this.onPressButton("Drinks")}}/>
        <RoundedButton title="Health" style={{backgroundColor: "#CF06BE"}} onPress={() => {this.onPressButton("Health")}}/>
        <RoundedButton title="Fun" style={{backgroundColor: "#FAA13A"}} onPress={() => {this.onPressButton("Fun")}}/>
        <RoundedButton title="Services" style={{backgroundColor: "#27AA16"}} onPress={() => {this.onPressButton("Services")}}/>
        <RoundedButton title="Shopping" style={{backgroundColor: "#B87CFF"}} onPress={() => {this.onPressButton("Shopping")}}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 40,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 100,
    margin: 10,
    padding: 10,
    backgroundColor: '#000',
    borderRadius: 10,
  },
  buttonTitle: {
    color: '#fff'
  }
});
