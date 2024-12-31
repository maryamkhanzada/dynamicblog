
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


export default function AuthorCard () {
    return(
        <div className='bg-white shadow-lg rounded-lg p-6 mt-12'> 
        <div className='flex items-center animation-fadeIn'>




            <Image src="/img31.jpg" alt="author image" width={64} height={64} className="rounded-full mr-4 object-cover border-2 border-red-500"></Image>
           

            <div>
                <h3 className='text-xl text-black font-bold'>Maryam Khan</h3>
                <p className='text-slate-500'>Web developer|Undergraduate{" "}</p>
            </div>
             </div>


         <p className='mt-4 text-black leading-relaxed'>
         Maryam is a passionate web developer with expertise in HTML, CSS, and TypeScript, currently exploring the Next.js framework. She is also an undergraduate student with a strong interest in IT, striving to balance her academic pursuits and her love for web development. Maryam is dedicated to continuous learning and growth in the field of technology.
         </p>
         <div className='mt-4 flex space-x-3'>
            <Link
            href='#'
            className='px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-300'>

               Facebook

            </Link>
            <Link
            href='#'
            className='px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-300'>

               Linkedin

            </Link>
            <Link
            href='https://github.com/maryamkhanzada/milestone-1.git'
            className='px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-300'>

               Github

            </Link>

         </div>
        </div>
        
    )
}