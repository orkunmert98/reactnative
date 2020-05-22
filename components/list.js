import React from 'react'
import {View,Text,CheckBox,StyleSheet} from "react-native"
import { List,RadioButton, Title} from 'react-native-paper';
import {Button} from "galio-framework"
import {connect} from "react-redux"
import {additem,removefull} from "../redux/Card"
import { TextInput } from 'react-native-gesture-handler';
 function list(props) {
const [expanded,setex]=React.useState(false)
const [obj,setobj]=React.useState({Size:{size:""},itemprice:0})
const [screen,setscreen]=React.useState(false)
const objectWithoutKey = (object, key) => {
    const {[key]: deletedKey, ...otherKeys} = object;
    return otherKeys;
  }

function name(n,{name,e,price}) {
if(e){
    setobj({...obj,[n]:{name,e,price}})
}else{
   
setobj(objectWithoutKey(obj,[n]))
    
}

}

function Addtocard() {
  
console.log(Object.values(obj))
let Total=0


Object.values(obj).map(item=>{
if(item.price){
  
Total+=item.price
}
})

obj.itemprice=Total
obj.id=Math.floor(Math.random() * (10000))
obj.name="Pizza Margarita"
obj.subname="Tomato,Mozerella"

props.add(obj)
}



    return (


<View  style={{marginLeft:20}}>







            
             <List.Accordion
        children={()=>(<Text>ASD</Text>)}
        left={
()=>(
<View style={styles.titlecontainer}>
            <View style={styles.nameitem}>

<Text style={{fontWeight:"bold"}}>Pızza Margarita</Text>
<Text style={{color:"#757575",fontSize:12}}>Tomato , Mozerella , papper</Text>
            </View>
            <View styles={styles.priceitem}><Text style={{paddingTop:10,color:"red"}}>CHF 14.50</Text></View>
            </View>

   )   }
     
          expanded={expanded}
          onPress={()=>setex(!expanded)}
        />
{expanded&&(

screen?(

<View style={{marginBottom:70}}>
 <View style={styles.checkboxContainer}>
 <View style={styles.item}> 
 <CheckBox  value={obj["52CM"]?obj["52CM"].e:false}  onValueChange={(e)=>name("52CM",{name:"52cm",e,price:14.5})}></CheckBox>
 <View style={{borderWidth:1,borderColor:"#757575",padding:3,display:"flex",flexDirection:"row",width:"70%",alignItems:"center"}}>
   <Text style={{flex:4,fontSize:12}}>  Mozzerella </Text>
   <Text style={{flex:2,fontSize:12,color:"red"}}>+1.00</Text>
 
   
   </View>

 </View>
 <View style={styles.item}> 
 <CheckBox  value={obj["52CM"]?obj["52CM"].e:false}  onValueChange={(e)=>name("52CM",{name:"52cm",e,price:14.5})}></CheckBox>
 <View style={{borderWidth:1,borderColor:"#757575",padding:3,display:"flex",flexDirection:"row",width:"70%",alignItems:"center"}}>
   <Text style={{flex:4,fontSize:12}}>  Mozzerella </Text>
   <Text style={{flex:2,fontSize:12,color:"red"}}>+1.00</Text>
 
   
   </View>

 </View>

 <View style={styles.item}> 
 <CheckBox  value={obj["52CM"]?obj["52CM"].e:false}  onValueChange={(e)=>name("52CM",{name:"52cm",e,price:14.5})}></CheckBox>
 <View style={{borderWidth:1,borderColor:"#757575",padding:3,display:"flex",flexDirection:"row",width:"70%",alignItems:"center"}}>
   <Text style={{flex:5,fontSize:12}}>  Mozzerella </Text>
   <Text style={{flex:1,fontSize:12,color:"red"}}>+1.00</Text>
 
   
   </View>

 </View>

</View>

<View style={{position:"relative",width:"100%"}}>

<Button color="error" onPress={Addtocard} style={{position:"absolute",right:40,width:"30%",color:"white"}}><Text style={{color:"white"}}>add</Text></Button>
<Button color="error" onPress={()=>setscreen(false)} style={{position:"absolute",left:10,width:"30%",color:"white"}}><Text style={{color:"white"}}>back</Text></Button>
</View>
</View>
):(
<View style={{marginBottom:70}}>
<View style={styles.item2}> 
        <RadioButton
          value="first"
          normal
          status={obj.Size.size === '20cm' ? 'checked' : 'unchecked'}
          onPress={() => { setobj({...obj, Size:{size:"20cm",price:20} });}}
        color="red"
        />
        <Text style={{borderWidth:1,borderColor:"#757575",padding:2}}>52cm    CHF 14.50</Text>
       
      </View>
      <View style={styles.item2}> 
        <RadioButton
          value="first"
          normal
          status={obj.Size.size === '20cm' ? 'checked' : 'unchecked'}
          onPress={() => { setobj({...obj, Size:{size:"20cm",price:20} });}}
        color="red"
        />
        <Text style={{borderWidth:1,borderColor:"#757575",padding:2}}>52cm    CHF 14.50</Text>
       
      </View>
<View>
    
</View>
<View style={{position:"relative",width:"100%"}}>
<Button color="error" onPress={()=>setscreen(true)} style={{position:"absolute",right:10,width:"20%"}}><Text style={{color:"white"}}>next</Text></Button>
</View>


</View>

))}

 
           
        
        </View>
    )
}


const styles = StyleSheet.create({
    
  titlecontainer:{
    
    width:"80%",
    display:"flex",
    flexDirection:"row"
  },
  nameitem:{
    flex:4
  },
  priceitem:{flex:2}
  ,checkboxContainer: {
        display:"flex",
  
       flexWrap:"wrap",
       flexDirection:"row",
        marginBottom: 20,

      },
      item:{
        margin:2,
        display:"flex",
        alignItems:"center",
    width:"100%",
     flexDirection:"row"
        },
        item2:{
            margin:2,
            display:"flex",
            alignItems:"center",
        width:"40%",
         flexDirection:"row"
            }
  
  });

  const d=(dispatch)=>(
    {
      add:(p)=>dispatch(additem(p)),
      remove:()=>dispatch(removefull())
    }
  )
export default connect(null,d)(list)
