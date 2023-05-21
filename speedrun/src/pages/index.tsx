import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Journey from '@/components/Journey'
const inter = Inter({ subsets: ['latin'] })
const mongoose=require('mongoose');

const DB='mongodb+srv://ytw7:coolkid09@cluster0.ct4ehsd.mongodb.net/users?retryWrites=true&w=majority';
mongoose.connect(DB).then(()=>{
  console.log('connect successful')
}).catch(()=>{
  console.log('connection failed')

}) ;

import { useWallet } from '@solana/wallet-adapter-react'
import { error } from 'console'
export default function Home() {

 

  const { connected, publicKey } = useWallet()
  return (
   <>
   
   <Header connected={connected} publicKey={publicKey}/>
   <Journey/>

   </>
  )
}
