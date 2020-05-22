import React from 'react'
import { StyleSheet, Dimensions, Image, TouchableWithoutFeedback, View,Text } from 'react-native';
import {Card} from 'native-base';
import {connect} from "react-redux"
import {additem,removefull,removeitem} from "../redux/Card"
import Icon from 'react-native-vector-icons/Feather';
 function Mycards(props) {
   console.log(props)
  function additem() {

    props.add({...props.itemprop,id:Math.floor(Math.random() * (10000))})
  }  
  function removeitem() {
 
   props.remove({id:props.itemprop.id,itemprice:props.itemprop.itemprice})
        
      }  


      function removefullitem() {  

            
          }  
  
  return (

    
            
              
          <Card  style={styles.cont}>
<View style={styles.item3}>
<View style={styles.nameitem}>

<Text style={{fontWeight:"bold"}}>{props.itemprop.name}</Text>
<Text style={{color:"#757575",fontSize:12}}>{props.itemprop.subname}</Text>
            </View>

</View>


<View style={styles.item1}>

<Icon name="plus-circle" style={styles.arrowr} size={29}
onPress={additem}
></Icon>
  
  </View>
<View style={styles.item1}><Text style={styles.fortext}>{props.itemprop.itemprice}</Text></View>
<View style={styles.item1}><Icon name="delete" style={styles.delete} size={29}
onPress={removeitem}
></Icon></View>

          </Card>
       
    
    )
}
const styles = StyleSheet.create({
  
    item1:{
  
  display:"flex",
  justifyContent:"center",
      flex:1,
     
    },
    item3:{
  flex:3,
  paddingLeft:5,
  paddingTop:30
     
         
        },

    item5:{
  
      display:"flex",
      justifyContent:"center",
          flex:0.5,
         
        }, 
    
    item2:{
justifyContent:"center" , 
      display:"flex",
      flexDirection:"row",
      alignItems:"center",
          flex:1,
          textAlign:"center",
         marginRight:10
        },
   fortext:{
     textAlign:"center",
   
    },
  delete:{textAlign:"center",color:"red"},
  arrowl:{
color:"red",
marginRight:10
  },
arrowr:{
marginLeft:10,
color:"#00B900"
},  
    cont:{
      display:"flex",
      flexDirection:"row",
     height:100
    }
  
  
  });
  

const d=(dispatch)=>({
add:(item)=>dispatch(additem(item)),
remove:(item)=>dispatch(removeitem(item)),
removefull:(item)=>dispatch(removefull(item)),
success:()=>dispatch(success())

})

  export default connect(null,d)(React.memo(Mycards))