import Image from 'next/image'

import "./header.scss"

export function Header(){
    return(
        <div className="header">
          <div>
            <h1>Hi, i´m Yara Pontes! 👋</h1>
            <h2>Software Developer</h2>
          </div>
          <Image
            src="/mephoto.jpg"
            alt="Vercel Logo"
            width={300}
            height={300}
            priority
          />
        </div>
    )
}