"use client"

import React, { useState } from 'react'
import { RectangleStackIcon } from '@heroicons/react/16/solid'
import { CheckIcon } from '@heroicons/react/24/outline'

function Refrences() {

    const [isOpen, setIsOpen] = useState(false)

    const collectionOfSpaces = [{
        id: 1,
        name: "Space and AI Tech",
        resources: 12,
        checked: true
    }, {
        id: 2,
        name: "Top RAG alternatives",
        resources: 10,
        checked: true
    }, {
        id: 3,
        name: "LLMs and benchmarks",
        resources: 2,
        checked: false
    }, {
        id: 4,
        name: "SpaceX",
        resources: 4,
        checked: false
    }]

    return (
        <div className='relative left-0 top-0'>

            <button
                onClick={() => setIsOpen(true)}
                className='absolute left-0 top-0 bg-background-secondary hover:text-white flex items-center gap-2 duration-300 h-11 text-center rounded-r-full p-2 pr-4 text-sm'
            >
                <RectangleStackIcon className='shrink-0 size-5' />
                References
            </button>

            {isOpen && (

                <div className='relative z-10 w-72 bg-background-secondary min-h-[600px] rounded-r-2xl p-3 space-y-5 flex flex-col justify-between'>

                    <div className='space-y-5'>
                        <input
                            type="text"
                            className='bg-background rounded-xl focus:text-white duration-300 outline-none text-sm px-3 h-12 w-full'
                            placeholder='search gpu...'
                        />


                        {/* other content */}
                        <div className='p-1'>
                            {/* spaces-list */}
                            <div className='space-y-6'>

                                {collectionOfSpaces.map(space => (
                                    <button key={space.id} className='flex justify-between w-full hover:scale-105 duration-300'>
                                        <span className='flex flex-col items-start gap-0.5'>
                                            <span className='text-white text-sm'>{space.name}</span>
                                            <span className='text-xs'>Resources: {space.resources}</span>
                                        </span>

                                        <span className={`${space.checked ? "opacity-100" : "opacity-0"}`}>
                                            <CheckIcon className='shrink-0 size-5 text-primary' />
                                        </span>

                                    </button>
                                ))}


                            </div>

                        </div>
                    </div>

                    <button onClick={() => setIsOpen(false)} className='text-sm text-rose-600'>
                        Close
                    </button>

                </div>

            )}


        </div>
    )
}

export default Refrences