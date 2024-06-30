"use client"

import React, { useState } from 'react'
import { RectangleStackIcon } from '@heroicons/react/16/solid'
import { CheckIcon, Cog6ToothIcon } from '@heroicons/react/24/solid'
import { Bars3BottomLeftIcon, CubeIcon, LinkIcon } from '@heroicons/react/24/outline'


function ResourcesSearch() {
    return (
        <div className='relative z-10 w-80 bg-background-secondary overflow-auto h-full no-scrollbar rounded-2xl space-y-5 text-sm'>


            <div className='bg-background-secondary'>
                {/* header */}
                <div className='h-12 bg-[#2C3439] flex items-center justify-between p-3 '>
                    <p>Search resources</p>
                    <button className='text-xs flex items-center gap-1'>
                        Drag
                        {/* toggle here - (small size) */}
                        <Cog6ToothIcon className='size-4' />
                    </button>
                </div>

                <div className='p-2 py-4 sticky top-0 border-b border-b-foreground-light/15 bg-background-secondary'>
                    <input
                        type="text"
                        className='bg-background rounded-xl focus:text-white duration-300 outline-none text-sm px-3 h-12 w-full'
                        placeholder='search gpu...'
                    />
                </div>


                {/* other content */}
                <div className='px-1 pb-20 mt-2'>
                    {/* spaces-list */}
                    <div className='space-y-6 p-1'>

                        {/* type - note */}
                        <div className='p-2 hover:bg-[#2D3438] flex gap-2.5 rounded-xl duration-300'>
                            <Bars3BottomLeftIcon className='size-[18px] shrink-0' />
                            <div>
                                <p>Nvidia will most likely create monopoly in software industry as they are already largest player in GPU hardware by 20...</p>
                            </div>
                        </div>

                        {/* type - space */}
                        <div className='p-2 hover:bg-[#2D3438] flex gap-2.5 rounded-xl duration-300'>
                            <CubeIcon className='size-[18px] shrink-0' />
                            <div className='space-y-1'>
                                <p>Nvidia will most likely create monopoly in software industry as they are already largest player in GPU hardware by 20...</p>
                                <p className='text-primary text-[13px]'>From space: GPU GOATS</p>
                            </div>
                        </div>

                        {/* type - note */}
                        <div className='p-2 hover:bg-[#2D3438] flex gap-2.5 rounded-xl duration-300'>
                            <LinkIcon className='size-[18px] shrink-0' />
                            <div className='space-y-1'>
                                <p>Nvidia will most likely create monopoly in software industry as they are already largest player in GPU hardware by 20...</p>
                                <p className='text-primary text-[13px] line-clamp-1'>Page url: https://www.cnbc.com/2024/05/23/nvidia-keeps-hitting-records-can-investors-still-buy-the-stock.html?&qsearchterm=nvidia</p>
                            </div>
                        </div>

                        {/* type - note */}
                        <div className='p-2 hover:bg-[#2D3438] flex gap-2.5 rounded-xl duration-300'>
                            <LinkIcon className='size-[18px] shrink-0' />
                            <div className='space-y-1'>
                                <p>Nvidia will most likely create monopoly in software industry as they are already largest player in GPU hardware by 20...</p>
                                <p className='text-primary text-[13px] line-clamp-1'>Page url: https://www.cnbc.com/2024/05/23/nvidia-keeps-hitting-records-can-investors-still-buy-the-stock.html?&qsearchterm=nvidia</p>
                            </div>
                        </div>


                        {/* type - note */}
                        <div className='p-2 hover:bg-[#2D3438] flex gap-2.5 rounded-xl duration-300'>
                            <LinkIcon className='size-[18px] shrink-0' />
                            <div className='space-y-1'>
                                <p>Nvidia will most likely create monopoly in software industry as they are already largest player in GPU hardware by 20...</p>
                                <p className='text-primary text-[13px] line-clamp-1'>Page url: https://www.cnbc.com/2024/05/23/nvidia-keeps-hitting-records-can-investors-still-buy-the-stock.html?&qsearchterm=nvidia</p>
                            </div>
                        </div>


                    </div>
                </div>

            </div>

        </div>

    )
}

export default ResourcesSearch