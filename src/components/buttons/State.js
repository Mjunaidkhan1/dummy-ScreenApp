import React,{useState} from 'react'
import { View, Text,StyleSheet,TouchableOpacity } from 'react-native'
import Button from './Button';

export default function State() {

const {container,button,textclor,common}= styles

    const text = {
        text1: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, ",
        text2: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        text3: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
        text4: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, "
    }
    const {text1,text2,text3,text4}=text
    const [state, setState] = useState(text1);
const [btnColor,setBtnColor]=useState({
  Btn1:'white'
})


    return (
        <View style={{ paddingTop: 25, paddingLeft: 20, paddingRight: 20,marginTop:5 }}>
        <View>
            <View style={container}>
        <TouchableOpacity style={button}
        onPress={() =>{  setState (text1)}}
        >
          <View style={textclor}>
            <Text style={common}>Text </Text>
            <Text style={common}>01 </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={button}
         onPress={() =>{ setState(text2)}}
        >
          <View style={textclor}>
            <Text style={common} >Text </Text>
            <Text style={common}>02 </Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={container}>
        <TouchableOpacity style={button}
         onPress={() =>{ setState(text3)}}
        >
          <View style={textclor}>
            <Text style={common} >Text </Text>
            <Text style={common}>03 </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={button}
         onPress={() =>{  setState(text.text4)}}
        >
          <View style={textclor}>
            <Text style={common}>Text </Text>
            <Text style={common}>04 </Text>
          </View>
        </TouchableOpacity>
      </View>
            
                < Button vlue={state} />

                </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flexDirection: "row"
  
    },
    button: {
      
      borderWidth: 1,
      borderColor: "white",
      elevation: 1,
      flex: 1,
      paddingLeft: 5,
      paddingBottom: 30,
      
    },
    textclor: {
      flexDirection: "row",
      justifyContent: "space-between"
      
    },
    common:{
      color:"white"
    }
  })
  