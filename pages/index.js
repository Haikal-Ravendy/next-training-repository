import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Navbar } from '@/src/components/navbar.component'
import Button from '@/src/components/button.component'
import Modal from '@/src/components/modal.component'
import { useState } from 'react'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [visible, setVisible] = useState(false)
  const onChangeModal = () => {
    setVisible(!visible)
  }
  return (
    <><Navbar /><div className={'dark h-screen w-full'}>

      <div className='h-screen w-full'>
        <Image
          width={1000}
          height={1000}
          src='/New Project.png'
        />
      </div>
      <div className='h-screen w-full'>
        <Image
          width={1000}
          height={1000}
          src='/New Project.png'
        />
      </div>
      <div className='h-screen w-full'>
        <Image
          width={1000}
          height={1000}
          src='/New Project.png'
        />
      </div>

    </div></>
  )
}