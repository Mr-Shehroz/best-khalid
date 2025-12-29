import Image from 'next/image'
import React from 'react'

const Projects = () => {
  return (
    <div>
        <div className='flex justify-center items-center w-full'>
            <Image src="/proj-1.svg" height={100} width={100} alt='project-1' className='w-[477px] h-[639px] absolute left-[1%]'/>

            {/* <Image src="/proj-2.svg" height={100} width={100} alt='project-1' className='w-[541px] h-[831px] z-10'/> */}
            <div className='bg-[url(/proj-3.svg)] bg-cover bg-center w-[474px] h-[766px] relative z-10'>
            <Image src="/proj-3-overlay.png" height={100} width={100} alt='proj-3-overlay' className='w-[539px] h-[827px] absolute inset-0 z-50'/>
            </div>
            <Image src="/proj-2.svg" height={100} width={100} alt='project-1' className='w-[477px] h-[639px] absolute right-0'/> 
        </div>
    </div>
  )
}

export default Projects