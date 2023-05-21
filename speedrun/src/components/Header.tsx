import Image from 'next/image'
import { Inter } from 'next/font/google'
import { ClockIcon, CurrencyDollarIcon, UserCircleIcon, Cog6ToothIcon } from '@heroicons/react/24/outline'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import { truncate } from '../utils/string'
const inter = Inter({ subsets: ['latin'] })
import { PublicKey } from '@solana/web3.js';
require('@solana/wallet-adapter-react-ui/styles.css')

interface HeaderProps {
  connected: boolean;
  publicKey: PublicKey | null;
}

export default function Header({ connected, publicKey }: HeaderProps) {
  const truncatedPublicKey = publicKey ? truncate(publicKey.toString()) : null;

  return (
   <>
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">

    <button className="ml-5 inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Leaderboard
       
       </button>
   <button className="ml-2 inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Project Submissions
         
       </button>
      
      
    </nav>
    <a className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
      <span className=" text-xl text-white ">SpeedRunHXRO</span>
    </a>
    <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
    
       {/* <WalletMultiButton className="phantom-button" startIcon={<UserCircleIcon style={{ height: 24, width: 24, color: '#ffd711' }} />}>
                        <span className="text-sm font-semibold text-[#ffd711]">{connected ? (truncatedPublicKey || '') : 'Connect Wallet'}</span>
                    </WalletMultiButton> */}
                    <WalletMultiButton className='bg-gradient-to-tr from-pink-300 via-blue-300 to-emerald-400'/>
    </div>
  </div>
  
     
   
   </>
  )
}