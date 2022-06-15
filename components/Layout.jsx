
import  Link  from 'next/link';
import  Head  from 'next/head';
export default function Layout({children, title}) {

    return(
        <>
        <Head>
            <title>{title} | Next Course</title>
        </Head>
             <nav>
                <Link  href='/'>
                 <a>HOME</a>
                 </Link>
                <Link  href='/about'>
                    <a>ABOUT</a>  
                </Link> 
                <Link  href='/posts'>
                    <a>POSTS</a> 
                </Link>
             </nav>
             <main>
                {children}
             </main>
             <style jsx>{`
             nav  { 
                position : fixed;
                height : 60px;
                left : 0;
                top : 0;
                right : 0;
                background : darkblue;
                display : flex;
                justify-content : space-around;
                align-items : center;

             }
            nav a {
                color : white;
                text-decoration : none
             }
             main {
                margin-top : 60px;
                padding : 1rem;
             }
             `}</style>
        </>
    )
}