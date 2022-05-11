import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import api from "../Api";
import data from "../data.json"; 

const Posts = () => {
    let {id} = useParams();
    const [name, setName] = useState("Posts");
    return (
        <>
            <h1>{name}</h1>
            <p>{id}</p>
        </>
    )
}


// const Posts = () => {
//     let {id} = useParams();
//     const [name, setName] = useState("Posts");
//     const [posts, setPosts] = useState({});

//     useEffect(()=> {
//         api.getSinglePosts(id).then(data => {
//             console.log(data);
//             setProduct(data);
//         })
//     }, []);

//     return (
//         <>
//             <h1>{posts.name || "Posts"}</h1>
//             <p>{id}</p>
//         </>
//     )
// }
export default Posts;