import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Alert, TouchableOpacity } from 'react-native';

class CategoryButton extends Component {
	render() {
		return (
		  <TouchableOpacity style={[styles.button, this.props.style]} backgroundColor="#fff" onPress={() => this.props.onPress()}>
        <Text style={styles.buttonTitle}>
          <Text style={{fontSize: 16, opacity: 0.54, lineHeight: 27}}>
            {this.props.count + "\n"}
          </Text> 
          <Text style={{fontSize: 16}}>
            {this.props.title + "\n"}
          </Text>  
          <Text style={{fontSize: 12, opacity: 0.54, lineHeight: 23}}>
            {this.props.subtitle}
          </Text>  
        </Text>
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
        <CategoryButton 
          title="Food"
          subtitle="Restaurants"
          count="3"
          style={{backgroundColor: "#539EF6"}}
          onPress={() => {this.onPressButton("Food")}}
        />

         <CategoryButton 
          title="Drinks"
          subtitle="Cafes & Bars"
          count="11"
          style={{backgroundColor: "#2A23D2"}}
          onPress={() => {this.onPressButton("Food")}}
        />

        <CategoryButton 
          title="Health"
          subtitle="Med & Gyms"
          count="7"
          style={{backgroundColor: "#CF06BE"}}
          onPress={() => {this.onPressButton("Food")}}
        />

        <CategoryButton 
          title="Fun"
          subtitle="Fun & Movies"
          count="12"
          style={{backgroundColor: "#FAA13A"}}
          onPress={() => {this.onPressButton("Food")}}
        />

         <CategoryButton 
          title="Services"
          subtitle="Banks & Gas"
          count="23"
          style={{backgroundColor: "#27AA16"}}
          onPress={() => {this.onPressButton("Food")}}
        />

        <CategoryButton 
          title="Shopping"
          subtitle="Retail & Malls"
          count="15"
          style={{backgroundColor: "#B87CFF"}}
          onPress={() => {this.onPressButton("Food")}}
        />
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
    color: '#fff',
    fontWeight: "bold",
    textAlign: "center"
  }
});
