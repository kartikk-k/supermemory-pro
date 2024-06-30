import { ChevronDownIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import Logo from '../Logo'

function WritingHeader() {
    return (
        <div className='w-full h-18 p-4 flex items-center justify-between'>

            <div className='w-40'>
                <Logo />
            </div>

            <input
                type="text"
                className='bg-background-secondary focus:text-white duration-300 truncate h-11 text-center w-40 rounded-full p-2 px-4 outline-none text-foreground-light text-sm font-medium'
                defaultValue={"OSS AI Products"}
            />

            <div className='w-40 flex justify-end'>
                <button className='flex p-2 px-3 hover:brightness-[115%] rounded-full items-center gap-2 text-sm bg-primary/10 text-primary duration-200'>
                    Export
                    <ChevronDownIcon className='shrink-0 size-4 stroke-2' />
                </button>
            </div>

        </div>
    )
}

export default WritingHeader