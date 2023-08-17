import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
    return (
        <main>
            <nav className='flex flex-row w-full px-[10%] py-5 z-10 fixed text-white underline underline-offset-8'>
                <Link href={'/'} className='mr-auto'>
                    <Image src={'/images/Logo_wMountains.png'} width={120} height={50} alt='logo' />
                </Link>
                <Link href={'/#history'}>
                    <p>01. HISTORY</p>
                </Link>
                <Link href={'/#team'} className='ml-10'>
                    <p>02. TEAM</p>
                </Link>
            </nav>
            <div id="home-page" className={`w-full bg-green-300 h-screen bg-[url('/images/LaBanner2.png')] bg-cover`}>
            </div>
            <div id="history" className={`w-full bg-green-300 h-screen bg-[url('/images/Bg.png')] bg-cover`}>
                <div className='w-[56%] mx-auto pt-20'>
                    <Image src={'/images/01history.png'} alt='history' width={234} height={114} />
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore sint consequatur ducimus. Quis quasi, illum
                        tempore aliquam blanditiis neque praesentium non! Modi dolor in non. Consectetur, vel laboriosam quod ipsam
                        perspiciatis delectus nam adipisci eum accusantium suscipit dolores numquam animi necessitatibus molestias
                        sequi similique blanditiis rem.
                    </p>
                </div>
            </div>
            <div id="team" className={`w-full bg-green-700 h-screen bg-[url('/images/tab1.png')] bg-cover`}>
                <div className='bg-white px-[20%] py-4 mx-auto grid grid-cols-3 items-end'>
                    <Image className='' src={'/images/02climb.png'} alt='history' width={234} height={114} />
                    <p className='col-span-2'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Eaque, libero quod illum eius porro ullam. Debitis quisquam incidunt autem rerum
                        enim quia blanditiis delectus? Fuga.
                    </p>
                </div>
                <div className='w-[56%] mx-auto pt-20'>
                    <Image src={'/images/schedule-content.png'} alt='history' width={234*1.2} height={114*1.2} />
                </div>

            </div>
        </main>
    )
}
