import Head from 'next/head'
import {useRouter} from 'next/router'
import Layout from './../../components/Layout';
import { useState } from 'react';
import { useEffect } from 'react';
export default function Post({post : ServerPost}) {
    const router = useRouter()
    const [post,setPost] = useState(ServerPost)
    useEffect(()=> {
        const load = async ()=> {
            const response = await fetch(`http://localhost:4200/posts/${router.query.id}`)
            const data = await response.json()
            setPost(data)
        }
        if(!ServerPost) {
            load()
        }
       
    },[])
   
    if(!post) {
        return (
            <Layout>
                <p>
                    Loading...
                </p>
            </Layout>
        )
    }


    return(
        <Layout title='Post Page'>
       
        <h1>{post.title}</h1>
        <hr />
        <p>{post.body}</p>
        <button style={{cursor: 'pointer'}} onClick={() => router.back()}>Back</button>
        </Layout>
    )
}
Post.getInitialProps = async ({query , req}) => {
   if (!req) {
    return {post:null}
   }
    const response = await fetch(`http://localhost:4200/posts/${query.id}`)
    const post = await response.json()
    return {
        post
    }
}
// export async function getServerSideProps( {req,query}) {
//             const response = await fetch(`http://localhost:4200/posts/${query.id}`)
//             const post = await response.json()
//             return {
//                 props:{post}
//             }
// }