import Banner from '@/components/Banner'
import Card from '@/components/Card'
import Navbar from '@/components/Navbar'
import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    
    <div>
     <Head>
      <title>Netflix Clone</title>
     </Head>
      <Navbar username="aniket@gmail.com"/>
      <Banner title="The Batman" subTitle="Gotham Series" imgUrl="/static/batman.jpg"/>
      <Card imgUrl="/static/barbie.webp" size="large"/>
      <Card  />
      <Card imgUrl="/static/Barbie2.webp" size="small"/>

   </div>
  )
}
