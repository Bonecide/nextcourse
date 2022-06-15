import Link from "next/link";
import { useEffect, useState } from "react";
import Layout from "../components/Layout";

export default function PostsPage({posts}) {
    // const [posts,setPosts] = useState(ServerPosts)
    
    // useEffect(()=> {
    //     const fetchPost = async () => {
    //         const response = await fetch('http://localhost:4200/posts')
    //         const result = await response.json()
    //         setPosts(result)
    //     }
    //     if(!ServerPosts) {
    //         fetchPost()
    //     }
    // },[])
    // if(!posts) {
    //     return (
    //         <Layout>
    //             <p>
    //                 Loading...
    //             </p>
    //         </Layout>
    //     )
    // }
    //***ЗАГРУЗКА ДАННЫХ ЧЕРЕЗ ФРОНТ***//

    return(
        <Layout title='Posts Page'>
            <h1>Posts Page</h1>
            <pre>
                {posts.map((post,idx)=> (
                    <li key={`post#${idx}`}>
                        <Link href={`/post/${post.id}`}>
                         <a>{post.title}</a> 
                        </Link>
                    </li>   
                ))}
            </pre>
        </Layout>
    )
}
PostsPage.getInitialProps = async ({req}) => {
    // if (!req) {
    //     return {
    //         posts : null
    //     }
    // }
    //***ЗАГРУЗКА ДАННЫХ ЧЕРЕЗ ФРОНТ***//
        const response = await fetch('http://localhost:4200/posts')
        const posts = await response.json()
        return {
            posts
        }
}
