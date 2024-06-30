import React from 'react'
import HomeInputQuery from '@/components/HomeInputQuery'
import HomeHeader from '@/components/HomeHeader'
import Menu from '@/components/Menu'

function Page() {
    return (
        <div className='h-screen bg-background'>
            <main className='min-h-screen flex justify-between items-center flex-col'>

                <HomeHeader />
                <HomeInputQuery />

                {/* to keep query-input in center */}
                <div className='h-16 w-full' />

            </main>

            <div className='absolute top-1/2 p-4 transform z-20 -translate-y-1/2'>
                <Menu />
            </div>

        </div>
    )
}

export default Page