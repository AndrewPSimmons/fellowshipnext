import React from 'react'
import LogoText from '../lib/svgs/LogoText'
import Link from 'next/link'
import BWIcons from './BWIcons'
import { constants } from '../lib/constants'
import useConfig from '../src/hooks/useConfig'
export default function Footer() {
  const config = useConfig()
  
  console.log({config});
  const footerNav = [
    {
      name: 'ABOUT',
      href: '/about',
      children: [
        {
          name: "VISION",
          href: "/about/vision",
        },
        {
          name: "MISSION",
          href: "/about/mission",
        },
        {
          name: "VALUES",
          href: "/about/values",
        },
      ]
    },
    {
      name: 'CONNECT',
      href: '/connect',
      children: null
    },
    {
      name: 'GIVING',
      href: '/giving',
      children: null
    },
  ]
  return (
    <div className='relative'>
      <div className='bg-gray-100 flex flex-col sm:flex-row justify-around items-start sm:items-center p-8 space-y-4 sm:space-y-0 sm:space-x-4'>
      <div className='leftSide flex flex-col max-w-[50%] space-y-2'>
          <LogoText width={200}></LogoText>
          <address>{constants.address} {constants.city} {constants.state} {constants.zip}</address>
          <div className='flex flex-col sm:flex-row sm:space-x-4'>{constants.meetingTimes.map(time => {
            return <p><b>{time.day}</b>: {time.time}</p>
          })}</div>
      </div>
      <div className="rightSide flex flex-row sm:justify-end max-w-[50%] w-full space-x-4 sm:space-x-12 lg:pr-[12%]">
        {footerNav.map((item)=> {
          return (
            <div className="flex flex-col">
              <Link href={item.href}>
                <p className='bold'><b>{item.name}</b></p>
              </Link>
              {item.children && item.children.map((child) => {
                return (
                  <Link href={child.href}>
                    <p className='py-1'>{child.name}</p>
                  </Link>
                )
              })}
            </div>
          )
        })}
      </div>
      
    </div>
    <p className='absolute bottom-5  right-10 sm:right-32 icons visible sm:invisible'>
      <BWIcons/>
    </p>
    </div>
  )
}
