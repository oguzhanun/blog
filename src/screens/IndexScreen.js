import React,{useContext,useEffect} from "react"
import {View, Text, StyleSheet,Button} from "react-native"
import {Feather} from "@expo/vector-icons"
import {Context} from "../context/BlogContext"
import { FlatList, TouchableOpacity } from "react-native-gesture-handler"
import axios from "axios"

const IndexScreen = (props) => {

    const {state, addBlogPost, getBlogPosts, deleteBlogPost} = useContext(Context)
    
    useEffect(  ()=>{
        
        getBlogPosts()
        // axios({
        //     url:"http://150581ee.ngrok.io/blogposts",
        //     method:"get"
        // }).then((res)=>{
        //     console.log(res.data)
        // }).catch((err)=>{
        //     console.log(err)
        // })

        const listener = props.navigation.addListener("didFocus",()=>{
            getBlogPosts()
        })

        return ()=>{
            listener.remove()
        }
        
    },[])

    return(
        <View>
            {/* <Text>Hello World !!!</Text> */}
            {/* <Button title="Add Blog" onPress={addBlogPost}/> */}
            <FlatList
                data={state}
                keyExtractor={(blogPost)=>blogPost.title}
                renderItem={({item})=>{
                    return(
                        <TouchableOpacity onPress={()=>{return props.navigation.navigate("Show",{id : item.id})}}>
                            <View style={styles.viewTwo}>
                                <Text>{item.title} --- {item.id}</Text>
                                <TouchableOpacity onPress={() => {return deleteBlogPost(item.id)}}>
                                    <Feather size={28} name="trash"/>
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
}

IndexScreen.navigationOptions = ({navigation}) => {
    return {
        headerRight : 
            <TouchableOpacity onPress={()=>navigation.navigate("Create")}>
                <Feather style={{marginRight:10}} name="plus" size={30} />
            </TouchableOpacity>
    }
}

const styles = StyleSheet.create({
    viewTwo : {
        flexDirection:"row",
        justifyContent:"space-between",
        padding:10

    }
})

export default IndexScreen