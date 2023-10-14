import { Cover } from '@/components/Cover'
import { Transition } from '@/components/Transition/Transition'
import { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Portafolio Joel Rivera',
  description: 'Portafolio animado ',
}


export default function Home() {
  return (
    <main className='bg-[#1e40af] h-[100vh]'>
      <Transition />
      <Cover />
    </main>
  )
}
