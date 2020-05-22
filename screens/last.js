import * as React from 'react';
import { List, Checkbox, RadioButton } from 'react-native-paper';
import Map from "../components/map"
import Liste from "../components/list"
import { Block } from "galio-framework"
import Foot from "../components/footer"
import { View, Text, StyleSheet, ScrollView, Picker } from "react-native"
const Last = () => {
    const [selectedValue, setSelectedValue] = React.useState("java");
    const [payment, setpayment] = React.useState("Cash");
const [method,setmethod]=React.useState("Delivery")
console.log(selectedValue)

    return (
<Block>
        <Block row style={{marginTop:50,marginRight:10,marginLeft:10}} space="between">
            <Block >
                <Block row>
                    <RadioButton
                        value="Delivery"
                        normal
                        status={method === 'Delivery' ? 'checked' : 'unchecked'}
                        onPress={() => { setmethod("Delivery")}}

                        color="red"
                    />
                    <Text  onPress={() => { setmethod("Delivery")}} style={{ padding: 2,fontSize:20 }}>Delivery At Home</Text>
                </Block>
                <Block row>
                    <RadioButton
                        value="Order"
                        normal
                        status={method === 'Order' ? 'checked' : 'unchecked'}
                        onPress={() => { setmethod("Order")}}

                        color="red"
                    />
                    <Text   onPress={() => { setmethod("Order")}} style={{ padding: 2,fontSize:20 }}>Order for Later</Text>
                </Block>
                <Block row>
                    <RadioButton
                        value="Pick"
                        normal
                        status={method === 'Pick' ? 'checked' : 'unchecked'}
                        onPress={() => { setmethod("Pick")}}

                        color="red"
                    />
                    <Text   onPress={() => { setmethod("Pick")}} style={{ padding: 2,fontSize:20 }}>Pick up</Text>
                </Block>


            </Block>

            <Picker
                enabled={method==="Delivery"?true:false}
                selectedValue={selectedValue}
                style={{ height: 50, width: 150,marginTop:20 }}
                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            >
                <Picker.Item label="12:45" value="java"  color={method!=="Delivery"?"#B7B7B7":"black"}/>
                <Picker.Item label="JavaScript" value="js" />
            </Picker>
        </Block>
    <Block style={{marginTop:100,marginLeft:10}}>
        <Block row >
                    <RadioButton
                        value="Cash"
                        normal
                        status={payment === 'Cash' ? 'checked' : 'unchecked'}
                        onPress={() => { setpayment("Cash")}}

                        color="red"
                    />
                    <Text  onPress={() => { setpayment("Cash")}} style={{ padding: 2,fontSize:20 }}>Payment Cash</Text>
                </Block>
                <Block row >
                    <RadioButton
                        value="Credit card"
                        normal
                        status={payment === 'Credit card' ? 'checked' : 'unchecked'}
                        onPress={() => { setpayment("Credit card")}}

                        color="red"
                    />
                    <Text   onPress={() => {  setpayment("Credit card")}} style={{ padding: 2,fontSize:20 }}>Credit Card</Text>
                </Block>
                </Block>
        </Block>
    );

}


const styles = StyleSheet.create({
    listtitle: {
        display: "flex",
        flexDirection: "row",
        height: 60,
        margin: 10,

        backgroundColor: "#E3E3E5"
    }


})



export default Last;
