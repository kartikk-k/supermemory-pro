import { PresentationChartLineIcon, RectangleStackIcon } from '@heroicons/react/16/solid'
import { PlusCircleIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import React from 'react'

function Menu() {
    return (
        <div className="">
            <div className="hover:rounded-3xl text-sm group inline-flex w-14 flex-col items-start gap-6 overflow-hidden rounded-[28px] bg-[#1F2428] px-3 py-4 text-[#6A737D] duration-200 hover:w-40">
                <Link href={'/'} className="flex cursor-pointer items-center gap-3 px-1 duration-200 hover:scale-105 hover:text-[#bfc4c9] active:scale-90">
                    <PlusCircleIcon className='size-[24px] shrink-0' />
                    <p className="opacity-0 duration-200 group-hover:opacity-100 shrink-0">Add content</p>
                </Link>

                <span className='w-full h-[2px] bg-[#6A737D]/20 -my-2'></span>

                <Link href={'/'} className="flex cursor-pointer items-center gap-3 px-1 duration-200 hover:scale-105 hover:text-[#bfc4c9] active:scale-90">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M5.566 4.657C5.95195 4.55235 6.35011 4.49955 6.75 4.5H17.25C17.66 4.5 18.056 4.555 18.433 4.657C18.1837 4.15898 17.8006 3.7402 17.3268 3.44754C16.8529 3.15489 16.3069 2.99993 15.75 3H8.25C7.69288 2.99974 7.1467 3.15462 6.67265 3.44728C6.1986 3.73994 5.8154 4.15883 5.566 4.657ZM2.25 12C2.25 11.2044 2.56607 10.4413 3.12868 9.87868C3.69129 9.31607 4.45435 9 5.25 9H18.75C19.5456 9 20.3087 9.31607 20.8713 9.87868C21.4339 10.4413 21.75 11.2044 21.75 12V18C21.75 18.7956 21.4339 19.5587 20.8713 20.1213C20.3087 20.6839 19.5456 21 18.75 21H5.25C4.45435 21 3.69129 20.6839 3.12868 20.1213C2.56607 19.5587 2.25 18.7956 2.25 18V12ZM5.25 7.5C4.84 7.5 4.444 7.555 4.066 7.657C4.3154 7.15883 4.6986 6.73994 5.17265 6.44728C5.6467 6.15462 6.19288 5.99974 6.75 6H17.25C17.8069 5.99993 18.3529 6.15489 18.8268 6.44754C19.3006 6.7402 19.6837 7.15898 19.933 7.657C19.5474 7.55244 19.1496 7.49964 18.75 7.5H5.25Z" fill="currentColor" />
                    </svg>
                    <p className="opacity-0 duration-200 group-hover:opacity-100 shrink-0">Memories</p>
                </Link>

                <Link href={'/'} className="flex cursor-pointer items-center gap-3 px-1 duration-200 hover:scale-105 hover:text-[#bfc4c9] active:scale-90">
                    <PresentationChartLineIcon className='size-[24px] shrink-0' />
                    <p className="opacity-0 duration-200 group-hover:opacity-100 shrink-0">Canvas</p>
                </Link>
            </div>
        </div>
    )
}

export default Menu