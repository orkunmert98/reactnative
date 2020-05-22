import React from 'react'
import {Block} from "galio-framework"
import {Text,TouchableHighlight} from "react-native"
import {connect} from "react-redux"
import Icon from "react-native-vector-icons/AntDesign"
 function footer({back,total,navigation}) {
     console.log(navigation)
     console.log("nbr")
    return (
       <Block row space="between" style={{height:60,backgroundColor:"red",width:"100%"}}>
           {back?(
          <TouchableHighlight onPress={()=>navigation.goBack()}>  
          <Block row>
        
          <Text style={{paddingTop:15,paddingLeft:40,fontSize:20,color:"white"}}>
          <Icon name="back" size={30} style={{color:"white",paddingRight:10}}></Icon>
              {back}</Text>
                 </Block>
                 </TouchableHighlight>

           ):(
            <Block row>
          
            
                   </Block>
           )}

<Text  style={{paddingTop:15,paddingRight:40,fontSize:20,color:"white"}}>Total: {total}$</Text>

       </Block>
    )
}
const s=state=>(
    {
        total:state.cart.total
    }
)

export default connect (s)(footer)