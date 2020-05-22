import React from 'react';
import { StyleSheet, Dimensions, ScrollView ,Alert,ToastAndroid,Text,Image} from 'react-native';
import { Block, theme,Button,Input} from 'galio-framework';
import Loca from "../components/location"
import yemek from "../assets/imgs/yemek.png"
import Geolocation from '@react-native-community/geolocation';
import { Card } from '../components';
import {connect} from "react-redux"
import {addlocation} from "../redux/location"
import Geocoder from 'react-native-geocoding';
 
// Initialize the module (needs to be done only once)
Geocoder.init("AIzaSyAktbnEqORLJuHPBRjasTbx41bUELuzUEk");
const { width } = Dimensions.get('screen');
import SwitchToggle from '@dooboo-ui/native-switch-toggle';

class Home extends React.Component {
 constructor(props){
   super(props)
   this.state={toggle:false,
  first:"bir",
  second:"iki",
  location:null,
  error:null,
  myNumber:"",
  }

 }
 onChanged=(text)=>{
  let newText = '';
  let numbers = '0123456789';

  for (var i=0; i < text.length; i++) {
      if(numbers.indexOf(text[i]) > -1 ) {
          newText = newText + text[i];
      }
      else {
          // your call back function
          Alert.alert("please enter numbers only");
      }
  }
  this.setState({ myNumber: newText });
}
componentDidMount() {
  Geolocation.getCurrentPosition(info =>
    {
        let s=JSON.stringify(info)
        this.props.addLocation(info.coords)
       


      }
    
    
  )
  }


find=()=>{
  this.setState({myNumber:"waiting..."})
  Geocoder.from(this.props.getLocation.latitude,this.props.getLocation.longitude)
  .then(json => {
          var addressComponent = json.results[0].address_components[6].long_name;
          this.setState({myNumber:addressComponent})
  })
  .catch(error => console.warn(error));


}

renderArticles = () => {
   
 
    

  return (

  
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.articles}>
   <Block flex center style={styles.home}>
  <Image source={yemek} style={{margin:10,width:200,height:200}}></Image>
  
  <Block style={{marginTop:40}}>
  <SwitchToggle
  
      buttonText={this.state.toggle?"Pickup":'Delivery'}
      backTextRight={this.state.toggle ? '' : 'Pickup'}
      backTextLeft={this.state.toggle ? 'Delivery' : ''}
      type={1}
      buttonStyle={{
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
      }}
      rightContainerStyle={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
      leftContainerStyle={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
      }}
      buttonTextStyle={{ fontSize: 18 }}
      textRightStyle={{ fontSize: 18 }}
      textLeftStyle={{ fontSize: 18}}
      containerStyle={{
        marginTop: 10,
        width: 180,
        height: 65,
        borderRadius: 30,
        padding: 5,
      }}
      backgroundColorOn="#e5e1e0"
      backgroundColorOff="#e5e1e0"
      circleStyle={{
        width: 80,
        height: 55,
        borderRadius: 27.5,
        backgroundColor: 'blue', // rgb(102,134,205)
      }}
      switchOn={this.state.toggle}
      onPress={() => this.setState({toggle:!this.state.toggle})}
      circleColorOff="#fff"
      circleColorOn="#fff"
      duration={200}
    />
</Block>
{!this.state.toggle?(
[ 
<Block width={width * 0.8} style={{ marginBottom: 15,marginTop:20 }}>
                   
<Input
value={this.state.myNumber}
borderless
onChangeText={(txt) => this.onChanged(txt)}
 placeholder="Postal Code"
icon="location"
family="Entypo"
color="black"
/>
</Block>,
<Block style={styles.container}>
<Button color="error" style={styles.button} onPress={this.find}><Text style={styles.tex}>Find my Location</Text></Button>
<Button color="error" style={styles.button} onPress={()=>this.props.navigation.navigate("Kategori")}><Text style={styles.tex}>Save</Text></Button>
</Block>



]):(

<Block style={styles.container}>

<Button color="error" style={styles.button} onPress={()=>this.props.navigation.navigate("Kategori")}><Text style={styles.tex}>Contınue</Text></Button>
</Block>

)

}



</Block>
    </ScrollView>
   
  )
}


  render() {
    return (
      <Block flex center style={styles.home}>
     {this.renderArticles()}
</Block>
    );
  }
}

const styles = StyleSheet.create({
  home: {
    width: width,    
  },
  articles: {
    width: width - theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE,
  },
  inputIcons: {
    marginRight: 12
  },
  container:{
    display:"flex",
    justifyContent:"center",
    flexDirection:"row"
  },
  button:{
    width:"30%",
    margin:30,
   
  },
  tex:{
    color:"white"
  }

});

const s=(state)=>(
  {getLocation:state.location.location}
)
const d=(dispatch)=>(
  {addLocation:(l)=>dispatch(addlocation(l))}
)

export default connect(s,d)(Home);
