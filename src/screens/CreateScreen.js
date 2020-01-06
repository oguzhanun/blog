import React, {useState, useContext} from "react"
import {Text, View, TextInput, Button, StyleSheet} from "react-native"
import {Context} from "../context/BlogContext"


const CreateScreen = ({navigation}) => {

    const {addBlogPost} = useContext(Context)
    const [input1, setInput1] = useState("")
    const [input2, setInput2] = useState("")
    
    return(<View>
            <Text style={styles.label}>Enter Title :</Text>
            <TextInput style={styles.input} value={input1} onChangeText={(text)=>setInput1(text)}  />
            <Text style={styles.label}>Enter Content :</Text>
            <TextInput style={styles.input} value={input2} onChangeText={(text)=>setInput2(text)}/>
            <Button title="Add the Post" onPress={()=> {
                                                    addBlogPost(input1, input2,()=>{
                                                        
                                                        navigation.navigate("Index")
                                                    })

                                                }}/>
        </View>
    )
}

const styles = StyleSheet.create({
    label:{
        margin : 10,
        fontSize : 20
    },
    input : {
        margin : 10,
        padding : 10,
        fontSize : 18,
        borderWidth : 1,
        borderColor : "black"

    }
})

export default CreateScreen