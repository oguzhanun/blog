import React,{useContext,useState} from "react"
import {Text, View, StyleSheet,TextInput, Button} from "react-native"
import {Context} from "../context/BlogContext"

const EditScreen = ({navigation}) => {

    const {state,editBlogPost} = useContext(Context)
    const theBlog = state.find((blog) => blog.id === navigation.getParam("id"))
    
    const [input1, setInput1] = useState(theBlog.title)
    const [input2, setInput2] = useState(theBlog.content)
    
    return(<View>
            <Text style={styles.label}>Enter Title :</Text>
            <TextInput style={styles.input} value={input1} onChangeText={(text)=>setInput1(text)}  />
            <Text style={styles.label}>Enter Content :</Text>
            <TextInput style={styles.input} value={input2} onChangeText={(text)=>setInput2(text)}/>
            <Button title="Edit the Post" onPress={()=> {editBlogPost(
                                                            input1, 
                                                            input2, 
                                                            navigation.getParam("id"),
                                                            ()=>{navigation.navigate("Index")}
                                                        )}
                                                    }/>
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


export default EditScreen