//import React,{useState,useReducer} from "react"
import createDataContext from "./createDataContext"
import axios from "axios"

//const BlogContext = React.createContext();

//export const BlogProvider = ({children}) => {
    
    const blogReducer = (state, action) => {
        
        if(state.length>0){
            count = state[state.length-1].id
        } else count = 0

        switch(action.type){
            
            case "get_blogposts": return action.payload

            case "edit_blogpost": return state.map((sta)=>{
                if(sta.id === action.payload.id){
                    sta.title = action.payload.title
                    sta.content = action.payload.content
                    return sta
                } else {
                    return sta
                }
            })
            case "add_blogpost":
                return [...state, { title : action.payload.title, 
                                    content : action.payload.content, 
                                    id : action.payload.id? action.payload.id : count + 1 } ]     //`Blog Post #${count +1}`
            case "delete_blogpost":
                return state.filter((sta)=>{
                    return(
                        sta.id !== action.payload
                    )
                })
            default :
                return state
        }
    }

    const getBlogPosts = (dispatch) => {
        return async ()=>{
            const response = await axios({
                url:"http://150581ee.ngrok.io/blogposts",
                method:"get"
            })
            dispatch({type:"get_blogposts", payload:response.data})
        }
    }
    
    const addBlogPost = (dispatch) => {
        return async (title, content, callback) => {
            
            await axios({
                method:"post",
                data:{title,content},
                url:"http://150581ee.ngrok.io/blogposts"
            })
            if(callback){
                callback()
            }
                
            
            // dispatch({ type : "add_blogpost", payload :{title, content} })
            // if(callback){
            //     callback()
            // }
        }
    }

    const editBlogPost = (dispatch) => {
        return async (title, content, id, callback) => {
            
            await axios({
                method:"put",
                url:`http://150581ee.ngrok.io/blogposts/${id}`,
                data:{title,content}
            })
            //dispatch({type:"edit_blogpost", payload:{title, content, id}})
            
            if(callback){
                callback()
            }
        } 
    }

    const deleteBlogPost = (dispatch) => {

    return (id) => { axios({
            method:"delete",
            url:`http://150581ee.ngrok.io/blogposts/${id}`
        })
        dispatch({type : "delete_blogpost", payload :id})
    }
       

        //return (id)=> {dispatch({type : "delete_blogpost", payload :id})}
    }

    // return(
    //     <BlogContext.Provider value={{data:blogPosts , addBlogPost}}>
    //         {children}
    //     </BlogContext.Provider>
    // )
//}

export  const {Context, Provider} = createDataContext(
                                        blogReducer, 
                                        {addBlogPost , getBlogPosts, deleteBlogPost, editBlogPost},
                                        [{id:1,title:"TEST",content:"TEST_CONTENT"}]
                                    )



//const [blogPosts, setBlogPosts] = useState([])
    // const blogPosts = [
    //     {
    //         title:"Blog Post #1"
    //     },
    //     {
    //         title:"Blog Post #2"
    //     }
    // ]
    // const addBlogPost = () => {
    //     return (
    //         setBlogPosts([...blogPosts, {title:`Blog Post #${blogPosts.length + 1}`}])
    //     )
    // }

    //const [blogPosts, dispatch] = useReducer(blogReducer,[])
    