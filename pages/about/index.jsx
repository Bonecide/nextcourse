import Link from "next/link";
import Layout from './../../components/Layout';
export default function About({title}) {
    return(
        <Layout title='About Page'>   
           <h1>
           {title}
           </h1>
                
        </Layout>
    )
}
About.getInitialProps = async () => {
    const response = await fetch('http://localhost:4200/about')
    const data = await response.json()

    return {
        title: data[0].title
    }
}