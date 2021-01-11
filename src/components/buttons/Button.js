import React,{useState} from "react";
import { StyleSheet, Text, View ,Image } from "react-native";


const Button = (props) => {
  const {heading,displycontainer,displytext,picturehading,picture,common}=styles

  return (
    <View>
      

      <View style={heading}>
        <Text style={common}>Direector</Text>
        <Text style={common}>Shortintroduction</Text>
        <Text style={common}>Debut 2014</Text>
      </View>
      <View style={displycontainer}>
        <Text style={displytext}>
          {props.vlue}
        </Text>
        <Text style={picturehading}>This is a Picture</Text>

        <Image style={picture} source={require('./pexel.jpg')} />
      </View>
      
    </View>

  );
};
// 't\n e\n x\n t\n'
// transform: [{ rotate: '270deg' }]
const styles = StyleSheet.create({
heading:{ 
  flexDirection: "row",
 justifyContent: "space-between",
 marginTop:10,
  paddingTop: 20 },

displycontainer:{ 
  alignItems: "flex-end",
 paddingTop: 30,
marginTop:10},
  
displytext:{
   width: '70%',
height:"34%",
color:"white" },

picturehading:{ 
  width: '70%', 
textAlign: "left",
marginTop:10,
color:"white" },

picture:{ 
  height: "45%",
 width: "70%",
marginTop:15,
 },

  common:{
    color:"white"
  }
})


export default Button;