import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useEffect, useState } from 'react'
import axios  from 'axios'
export default function About({allPosts, host}) {
  const [data,setData] = useState([]);

  useEffect(() => {
    // axios.get('https://onegatemb.com/api/user/getall').then(res=>{
    setData(allPosts);
    //  console.log(res.data)
    // })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    //console.log('allPosts',allPosts);

  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {host}
      {data.map(item=>{
        return(<h1 key={item.id}>{item.user_name}</h1>)
      })}
      

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export async function getStaticProps() {
  const res = await axios.get('https://onegatemb.com/api/user/getall')
  const allPosts = res.data
  return {
    props: { 
      allPosts,
      host: process.env.DB_HOST,
     },
    
  }
}


