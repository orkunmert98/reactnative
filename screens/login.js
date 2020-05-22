import React from "react";
import {
  StyleSheet,
  ImageBackground,
  Dimensions,
  StatusBar,
  ScrollView,
  KeyboardAvoidingView,
  View
  
} from "react-native";
import { Block, Checkbox, Text, theme } from "galio-framework";

import { Button, Icon, Input } from "../components";
import { Images, argonTheme } from "../constants";

const { width, height } = Dimensions.get("screen");

class Register extends React.Component {
  render() {
    return (
      
   <Block flex middle>
    
        <StatusBar hidden />
         
          <Block flex middle>
        
            <Block style={styles.registerContainer}>
       
              <Block flex={0.15} middle style={styles.socialConnect}>
                <Text color="#8898AA" size={24}>
                  Login
                </Text>
                
              </Block>
       
              <Block flex>
              <ScrollView> 
              
                <Block flex center>
                  <KeyboardAvoidingView
                    style={{ flex: 1 }}
                    behavior="padding"
                    enabled
                  >
                  
                   
                  
                    <Block width={width * 0.8}>
                      <Input
                        borderless
                        placeholder="Email"
                        iconContent={
                          <Icon
                            size={16}
                            color={argonTheme.COLORS.ICON}
                            name="ic_mail_24px"
                            family="ArgonExtra"
                            style={styles.inputIcons}
                          />
                        }
                      />
                    </Block>
                    <Block width={width * 0.8} style={{marginBottom:20}} >
                      <Input
                        password
                        borderless
                        placeholder="Password"
                        iconContent={
                          <Icon
                            size={16}
                            color={argonTheme.COLORS.ICON}
                            name="padlock-unlocked"
                            family="ArgonExtra"
                            style={styles.inputIcons}
                          />
                        }
                      />
                     
                    </Block>
                    <Block row space="between">

                  
                    <Button color="primary" style={styles.createButton}>
                        <Text bold size={16} color={argonTheme.COLORS.WHITE}>
                          Sing up
                        </Text>
                      </Button>
                      <Button color="primary" style={styles.createButton}>
                        <Text bold size={16} color={argonTheme.COLORS.WHITE}>
                          Login
                        </Text>
                      </Button>
                
                    
                    </Block>
                 
                     
                  
                   
             
                    
                  </KeyboardAvoidingView>
                  
                </Block>
                </ScrollView> 
              </Block>
          
            </Block>
    
          </Block>
          
      </Block>
     
    );
  }
}

const styles = StyleSheet.create({
  registerContainer: {
    width: width * 0.9,
    height: height * 0.78,
    backgroundColor: "#F4F5F7",
    borderRadius: 4,
    shadowColor: argonTheme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
    elevation: 1,
    overflow: "hidden"
  },
  socialConnect: {
    backgroundColor: argonTheme.COLORS.WHITE,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "#8898AA"
  },
  socialButtons: {
    width: 120,
    height: 40,
    backgroundColor: "#fff",
    shadowColor: argonTheme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
    elevation: 1
  },
  socialTextButtons: {
    color: argonTheme.COLORS.PRIMARY,
    fontWeight: "800",
    fontSize: 14
  },
  inputIcons: {
    marginRight: 12
  },
  passwordCheck: {
    paddingLeft: 15,
    paddingTop: 13,
    paddingBottom: 30
  },
  createButton: {
    width: width * 0.35,
    marginTop: 25
  }
});

export default Register;
