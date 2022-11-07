import React from 'react'
import BWFacebookCircleLogo from '../lib/svgs/BWFacebookCircleLogo'
import BWInstagramLogo from '../lib/svgs/BWInstagramLogo'
import BWYoutubeLogo from '../lib/svgs/BWYoutubeLogo'
import useConfig from '../src/hooks/useConfig'
import BWIcons from './BWIcons'
import Footer from './Footer'
import Navbar from './Navbar'

export default function Layout({ children }: { children: React.ReactNode }) {
  const config = useConfig()

  console.log(config?.defaultConfig);
    return (
      <>
        <Navbar />
        <main className='bg-green-100 min-h-screen px-[5%] xl:px-[20%]'>{children}</main>
        <Footer />

        
        <div className='invisible sm:visible fixed bottom-5 right-5'>
          <BWIcons/>
        </div>
      </>
    )
  }