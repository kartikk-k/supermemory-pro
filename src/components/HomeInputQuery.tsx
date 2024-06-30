"use client"

import { ArrowRightIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

function HomeInputQuery() {

    const [inputFocus, setInputFocus] = useState(false)
    const [filterSearchActive, setFilterSearchActive] = useState(false)

    const [filters, setFilters] = useState([{
        id: 1,
        name: "Nvidia"
    }, {
        id: 2,
        name: "Open-source"
    }, {
        id: 3,
        name: "GPUs"
    }, {
        id: 4,
        name: "New in AI"
    }, {
        id: 5,
        name: "ChatGPT"
    }])

    return (
        // <main className='flex items-center justify-center min-h-screen'>

        <div className='relative'>
            <div className='max-w-4xl bg-[#1F2428] w-full rounded-3xl overflow-hidden'>

                <form className="flex gap-4 p-2.5 w-full">
                    <textarea
                        onFocus={() => setInputFocus(true)}
                        onBlur={() => setInputFocus(false)}
                        name="q"
                        cols={30}
                        rows={6}
                        className="bg-transparent no-scrollbar pt-3 px-2 text-base placeholder:text-[#5D6165] text-[#9DA0A4] focus:text-white duration-200 tracking-[3%] outline-none resize-none w-full"
                        placeholder="Ask your second brain..."
                    />

                    {/* submit button */}
                    <button
                        className="h-12 w-12 rounded-[16px] text-primary bg-[#21303D] all-center shrink-0 hover:brightness-125 duration-200 outline-none focus:outline focus:outline-primary active:scale-90"
                    >
                        <ArrowRightIcon className='size-6' />
                    </button>

                </form>

                <hr className='border-[#2D343A]' />

                {/* bottom */}
                <div className='h-[50px] flex items-center'>

                    {/* add filter */}
                    <div className='bg-[#2C3338] h-full shrink-0'>
                        <input
                            onFocus={() => setFilterSearchActive(true)}
                            onBlur={() => setFilterSearchActive(false)}
                            type="text"
                            name="add-filter"
                            className='h-full text-sm bg-transparent px-4 w-32 outline-none placeholder:text-[#858B92] text-white'
                            placeholder='add filter...'
                        />
                    </div>

                    {/* list of filters */}
                    <div className='flex gap-3 px-6 text-foreground-light overflow-x-auto w-full'>

                        {filters.map(i => (
                            <SelectedFilter key={i.id} name={i.name} />
                        ))}

                    </div>

                </div>

            </div>

            {filterSearchActive && (
                <div className='absolute mt-4 w-52'>
                    <FilterSearch />
                </div>
            )}

        </div>


    )
}

export default HomeInputQuery;


const FilterSearch = () => {
    return (
        <div className='bg-[#1F2428] text-sm rounded-2xl text-[#989EA4] overflow-hidden flex flex-col'>
            <button className='h-12 flex items-center px-3 hover:text-[#369DFD] hover:bg-[#369DFD]/20 duration-200'>
                UI designs
            </button>

            <hr className='border-[#2D343A]' />

            <button className='h-12 flex items-center px-3 hover:text-[#369DFD] hover:bg-[#369DFD]/20 duration-200'>
                Robotics
            </button>

            <hr className='border-[#2D343A]' />

            <button className='h-12 flex items-center px-3 hover:text-[#369DFD] hover:bg-[#369DFD]/20 duration-200'>
                VCs list
            </button>

        </div>
    )
}

const SelectedFilter = ({ name }: { name: string }) => {
    return (
        <div className='flex items-center gap-1 text-sm group hover:text-rose-500'>
            <p className='select-none'>{name}</p>
            <button className='p-1 opacity-0 duration-200 group-hover:opacity-100'>
                <svg width="15" height="17" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g>
                        <path d="M3.75 13.25L11.25 5.75M3.75 5.75L11.25 13.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </g>
                </svg>
            </button>
        </div>
    )
}