import Link from 'next/link'
import React from 'react'
import { constants } from '../lib/constants'
import BWFacebookCircleLogo from '../lib/svgs/BWFacebookCircleLogo'
import BWInstagramLogo from '../lib/svgs/BWInstagramLogo'
import BWYoutubeLogo from '../lib/svgs/BWYoutubeLogo'

export default function BWIcons() {
  return <div className="flex flex-row space-x-4 items-center">
          <Link href={constants.facebookLink}>
            <BWFacebookCircleLogo width={40}/>
          </Link>
          <Link href={constants.instagramLink}>
            <BWInstagramLogo width={40}/>
          </Link>
          <Link href={constants.youtubeLink}>
            <BWYoutubeLogo width={50}/>
          </Link>
    </div>
}
