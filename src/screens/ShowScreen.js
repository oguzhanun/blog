import React, {useContext} from "react"
import {Text, StyleSheet, View} from "react-native"
import {Context} from "../context/BlogContext"
import { TouchableOpacity } from "react-native-gesture-handler"
import { EvilIcons } from "@expo/vector-icons"

const ShowScreen = ({navigation}) => {

    const id = navigation.getParam("id")
    const {state} = useContext(Context)
    const blogPost = state.find((blog)=>{return blog.id===id})
    

    console.log(id)

    return(
        <View>
            <Text>Title : {blogPost.title}</Text>
            <Text>Content : {blogPost.content}</Text>
        </View>
    )
}

ShowScreen.navigationOptions = ({navigation})=>{
    
    return {
        headerRight : <TouchableOpacity onPress={()=> navigation.navigate("Edit", {id:navigation.getParam("id")})}>
                        <EvilIcons name="pencil" size={35}/>
                      </TouchableOpacity>
    }
    
}


export default ShowScreen