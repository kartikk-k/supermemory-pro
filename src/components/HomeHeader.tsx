import { ClockIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import React from 'react'
import Logo from './Logo'

function HomeHeader() {
    return (
        <div className='w-full h-16 p-4 flex items-center justify-between'>

            <Logo />

            <button className='flex p-2 px-3 rounded-xl items-center gap-2 text-sm hover:bg-background-secondary hover:text-foreground duration-200'>
                <ClockIcon className='shrink-0 size-5' />
                History
            </button>

        </div>
    )
}

export default HomeHeader