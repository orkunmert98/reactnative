import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Alert,
  TouchableOpacity
} from "react-native";
import Geocoder from 'react-native-geocoding';
 
// Initialize the module (needs to be done only once)
Geocoder.init("AIzaSyAktbnEqORLJuHPBRjasTbx41bUELuzUEk");
 //
import Geolocation from '@react-native-community/geolocation';

export default class App extends Component {
  state = {
    location: null
  };

  findCoordinates = () => {
    Geolocation.getCurrentPosition(info =>
        {
            let s=JSON.stringify(info)
            this.setState({location:s})
            Geocoder.from(info.coords.latitude,info.coords.longitude)
            .then(json => {
                    var addressComponent = json.results[0].address_components[6].long_name;
                console.log(addressComponent);
            })
            .catch(error => console.warn(error));



        }
        
       )

    


  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.findCoordinates}>
          <Text style={styles.welcome}>Find My Coords?</Text>
          <Text>Location: {this.state.location}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#F5FCFF"
    },
    welcome: {
      fontSize: 20,
      textAlign: "center",
      margin: 10
    },
    instructions: {
      textAlign: "center",
      color: "#333333",
      marginBottom: 5
    }
  });