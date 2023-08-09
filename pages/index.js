import Banner from '@/components/Banner'
import Navbar from '@/components/Navbar'
import Image from 'next/image'

export default function Home() {
  return (
   <div>
      
      <Navbar username="aniket@gmail.com"/>
      <Banner title="The Batman" subTitle="Gotham Series" imgUrl="/static/batman.jpg"/>

   </div>
  )
}
