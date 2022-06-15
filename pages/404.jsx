import styles from '../styles/error.module.css'
import  Link  from 'next/link';
import Layout from './../components/Layout';
export default function ErrorPage() {

    return(
        <Layout title='404 Error'>
        <h1 className={styles.error}>Error 404</h1>
        <p>Please <Link className='error' href='/'> 
            <a>go back</a>
        </Link> to safety</p>
        </Layout>
    )
}