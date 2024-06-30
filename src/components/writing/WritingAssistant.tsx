import { SparklesIcon } from '@heroicons/react/16/solid'
import { Bars3BottomLeftIcon } from '@heroicons/react/24/outline'
import React from 'react'

function WritingAssistant() {


    return (
        <div>
            {/* to be replaced with editor */}
            <div className='space-y-4'>
                <h1 className='text-2xl text-white font-medium'>
                    Top 10 Customer-Facing Open-Source AI Products
                </h1>

                <p >Rasa: An open-source conversational AI platform used to create intelligent chatbots and virtual assistants for customer service and support. [1]</p>
                <p >	OpenAI (GPT Models): OpenAI&apos;s Generative Pre-trained Transformer (GPT) models drive natural language processing applications such as chatbots, virtual assistants, and content generation tools.</p>
            </div>


            {/* suggestions */}
            <div className='bg-background-secondary w-[300px] rounded-2xl absolute mt-10 overflow-hidden'>

                {/* option-1 */}
                <div className='flex items-center gap-3 p-3 group cursor-pointer hover:bg-primary/10 hover:text-primary duration-200'>
                    {/* icon */}
                    <div className='h-12 w-12 rounded-xl all-center bg-[#2D343A] group-hover:bg-primary/20 duration-150'>
                        <Bars3BottomLeftIcon className='w-6' />
                    </div>

                    <div>
                        <p className=''>Text</p>
                        <p className='text-sm opacity-70'>Just start typing with plain text</p>
                    </div>

                </div>

                {/* option-2 */}
                <div className='flex items-center gap-3 p-3 group cursor-pointer hover:bg-primary/10 hover:text-primary duration-200'>
                    {/* icon */}
                    <div className='h-12 w-12 rounded-xl all-center bg-[#2D343A] group-hover:bg-primary/20 duration-150'>
                        <SparklesIcon className='w-6' />
                    </div>

                    <div>
                        <p className=''>Continue writing</p>
                        <p className='text-sm opacity-70'>Use AI to expand your thoughts</p>
                    </div>

                </div>

                {/* option-3 */}
                <div className='flex items-center gap-3 p-3 cursor-pointer group hover:bg-primary/10 hover:text-primary duration-200'>
                    {/* icon */}
                    <div className='h-12 w-12 rounded-xl all-center bg-[#2D343A] group-hover:bg-primary/20 duration-150'>
                        {/* <Headin className='w-6' /> */}
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.33337 10H10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M3.33337 15V5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M10 15V5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M14.1666 9.99992L16.6666 8.33325V14.9999" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                    </div>

                    <div>
                        <p className=''>Heading 1</p>
                        <p className='text-sm opacity-70'>Big section heading</p>
                    </div>

                </div>

                {/* option-3 */}
                <div className='flex items-center gap-3 cursor-pointer p-3 group hover:bg-primary/10 hover:text-primary duration-200'>
                    {/* icon */}
                    <div className='h-12 w-12 rounded-xl all-center bg-[#2D343A] group-hover:bg-primary/20 duration-150'>
                        {/* <Headin className='w-6' /> */}
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.33337 10H10" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M3.33337 15V5" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M10 15V5" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M17.5 15H14.1666C14.1666 11.6667 17.5 12.5 17.5 10C17.5 8.75002 15.8333 7.91668 14.1666 9.16668" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>

                    <div>
                        <p className=''>Heading 2</p>
                        <p className='text-sm opacity-70'>Medium section heading</p>
                    </div>

                </div>

            </div>


        </div>
    )
}

export default WritingAssistant