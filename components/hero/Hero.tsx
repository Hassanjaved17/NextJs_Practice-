import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className='main flex items-center justify-between'>
<div className='hero-text text-xl font-light color-black '>
<div>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, placeat!</p>
</div>
</div>
<div className='hero-image' >
  <Image
      src="/images/tech.jpeg"
      width={500}
      height={500}
      alt="Picture of the author"
    />
</div>

    </div>
  )
}

export default Hero