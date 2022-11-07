import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css';
import HomeSlideShow from '../components/HomeSlideShow'
export default function Home() {
  return (
    <>
      <Layout>
        <Head>
          <title>Fellowship</title>
        </Head>

        <HomeSlideShow/>
        
      </Layout>
    </>
  )
}
