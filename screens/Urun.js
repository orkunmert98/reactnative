import * as React from 'react';
import { List, Checkbox } from 'react-native-paper';
import Map from "../components/map"
import Liste from "../components/list"
import Foot from "../components/footer"
import {View,Text,StyleSheet,ScrollView} from "react-native"
class MyComponent extends React.Component {
  state = {
    expanded: true
  }

  _handlePress = () =>
    this.setState({
      expanded: !this.state.expanded
    });

  render() {
    return (


    <View style={{flex:1}}>
<Map></Map>
<ScrollView >     
<View>

<View style={styles.listtitle}>

   <Text style={{color:"red",fontSize:30,paddingTop:7, fontWeight: "bold",paddingLeft:10}}>PIZZA</Text>
   <Text style={{color:"red",fontSize:13,paddingTop:25, fontWeight: "bold",paddingLeft:10}}>32cm</Text>
 
  
 </View>
 
<Liste ></Liste>
<Liste></Liste>
<View style={styles.listtitle}>
   <Text style={{color:"red",fontSize:30,paddingTop:7, fontWeight: "bold",paddingLeft:10}}>PIZZA</Text>
   <Text style={{color:"red",fontSize:13,paddingTop:25, fontWeight: "bold",paddingLeft:10}}>32cm</Text>
 </View>

<Liste></Liste>
<Liste></Liste>
<View style={styles.listtitle}>
   <Text style={{color:"red",fontSize:30,paddingTop:7, fontWeight: "bold",paddingLeft:10}}>PIZZA</Text>
   <Text style={{color:"red",fontSize:13,paddingTop:25, fontWeight: "bold",paddingLeft:10}}>32cm</Text>
 </View>

<Liste></Liste>
<Liste></Liste>



</View>
</ScrollView>
<Foot back={"back"} navigation={this.props.props.navigation}></Foot>
        </View>
        
    );
  }
}

const styles = StyleSheet.create({
listtitle:{
display:"flex",
flexDirection:"row",  
  height:60,
  margin:10,
  
  backgroundColor:"#E3E3E5"
}


})



export default MyComponent;
