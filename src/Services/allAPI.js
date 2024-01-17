
import { commonApi } from "./commonAPI"
import { serverURL } from "./serverURL"


export const uploadVideo=async(reqBody)=>{
    // call POST http method "http//localhost:4000/video" to add video to json server and return response
    return await commonApi("POST" ,`${serverURL}/videos`,reqBody)
}

// get all videos from json server

export const getAllVideo =async ()=>{
    // make get http method "http//localhost:4000/video" to get all videos from json serve rto view component 
    return await commonApi("GET",`${serverURL}/videos`,"")
}

// get one video from json server
export const getAVideo =async (id)=>{
    // make get http method "http//localhost:4000/video" to get all videos from json serve rto videocard component 
    return await commonApi("GET",`${serverURL}/videos/${id}`,"")
}

// remove video from json server
export const deleteVideo = async (id)=>{
    // make get http methoid to "http//localhost:4000/videos" to get all videos from json server to videocard 
    return await commonApi("DELETE",`${serverURL}/videos/${id}`,{})
}

export const addToHistory = async(videoDetails)=>{
//make POST http request to http://localhost:4001/history to add watchhistory to the
//json server and return rersponse to videocard
    return await commonApi("POST",`${serverURL}/history`,videoDetails)
}

export const getAllHistory = async()=>{
// make get http request to http://localhost:4001/history get all video watch history from json server to watch history componebt
return await commonApi("GET",`${serverURL}/history`,"")
}

export const deleteHistory = async(id)=>{
    // make delete http request to http://localhost:4001/history delete all video watchhistory from json server
    return await commonApi("DELETE",`${serverURL}/history/${id}`,{})
    }

export const addCategory = async(reqBody)=>{
     // make post http method "http//localhost:4001/categories" to add all videos from json serve rto category component
     return await commonApi("POST",`${serverURL}/categories`,reqBody) 

}
export const getAllCategory =async ()=>{
    // make get http method "http//localhost:4000/categories" to get all videos from json serve rto categories component 
    return await commonApi("GET",`${serverURL}/categories`,"")
}

export const deleteCategory = async (id)=>{
    // delete http request to "http://localhost:4001/categories/id" to DELETE video from 
    //  categories
    return await commonApi("DELETE",`${serverURL}/categories/${id}`,{})
}


export const updateCategory = async (id,body)=>{
    // put http request to "http://localhost:4001/categories/id" to UPDATE video from json servr and return categories
    return await commonApi("PUT",`${serverURL}/categories/${id}`,body)
}