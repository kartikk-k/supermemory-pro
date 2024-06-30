"use client"

import { SparklesIcon } from '@heroicons/react/16/solid'
import { ArrowLeftIcon, ArrowPathIcon, Bars3CenterLeftIcon, CheckCircleIcon, ClipboardIcon, LanguageIcon, QuestionMarkCircleIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

type AskAIState = 'ask' | 'rewrite' | 'translate' | 'auto-complete' | null | undefined

function AskAI() {

    const [currState, setCurrState] = useState<AskAIState>(null)


    const handleClick = (state: AskAIState) => {
        if (currState === 'translate' || currState === 'auto-complete') setCurrState(null)
        else setCurrState(state)
    }

    return (
        <div className='flex flex-col items-center'>


            <div className='py-4'>
                {/* options */}
                {currState === undefined && (

                    <div className='text-sm bg-background-secondary rounded-full p-2 inline-flex items-center gap-2'>

                        <button onClick={() => handleClick('ask')} className='h-9 px-2 rounded-full pr-3 hover:bg-[#33393D] flex items-center gap-1.5 duration-300'>
                            <QuestionMarkCircleIcon className='size-5 stroke-[1.8px]' />
                            Ask a question
                        </button>

                        <button onClick={() => handleClick('rewrite')} className='h-9 px-2 rounded-full pr-3 hover:bg-[#33393D] flex items-center gap-1.5 duration-300'>
                            <ArrowPathIcon className='size-5 stroke-[1.8px]' />
                            Rewrite
                        </button>

                        <button onClick={() => handleClick('translate')} className='h-9 px-2 rounded-full pr-3 hover:bg-[#33393D] flex items-center gap-1.5 duration-300'>
                            <LanguageIcon className='size-5 stroke-[1.8px]' />
                            Translate
                        </button>

                        <button onClick={() => handleClick('auto-complete')} className='h-9 px-2 rounded-full pr-3 hover:bg-[#33393D] flex items-center gap-1.5 duration-300'>
                            <Bars3CenterLeftIcon className='size-5 stroke-[1.8px]' />
                            Auto-complete
                        </button>

                    </div>

                )}


                {/* ask a question */}
                {currState === 'ask' && (
                    <div className='text-sm bg-background-secondary rounded-3xl p-3 w-[550px] space-y-3'>
                        {/* header */}
                        <div className='flex items-center justify-between'>
                            <button onClick={() => setCurrState(undefined)}>
                                <ArrowLeftIcon className='size-5' />
                            </button>
                            <p>Ask a question based on selected resources:</p>
                            <span className='w-5'></span>
                        </div>
                        {/* textarea */}
                        <textarea
                            id=""
                            name="ask a question"
                            className='bg-[#33393D] w-full rounded-2xl relative -bottom-1 outline-none resize-none p-3 focus:text-white duration-200 font-medium'
                            rows={5}
                        >

                        </textarea>
                    </div>
                )}

                {/* re-write */}
                {currState === 'rewrite' && (
                    <div className='text-sm bg-background-secondary rounded-3xl p-3 w-[550px] space-y-3'>
                        {/* header */}
                        <div className='flex items-center justify-between'>
                            <button onClick={() => setCurrState(undefined)}>
                                <ArrowLeftIcon className='size-5' />
                            </button>
                            <p>Rewrite</p>
                            <span className='w-5'></span>
                        </div>

                        {/* textarea */}
                        <textarea
                            id=""
                            name="ask a question"
                            className='bg-[#33393D] w-full rounded-2xl outline-none resize-none p-3 focus:text-white duration-200 font-medium'
                            rows={4}
                            value={`OpenAI's state-of-the-art GPT models play a crucial role in driving chatbots, virtual assistants, and content generation tools across a wide range of natural language processing applications.`}
                        >
                        </textarea>

                        {/* response options */}
                        <div className='flex items-center gap-6'>
                            <button className='text-[#26D987] flex items-center gap-1 hover:brightness-125 duration-300'>
                                <CheckCircleIcon className='w-[18px]' />
                                Accept response
                            </button>

                            <button className='flex items-center gap-1 hover:brightness-125 duration-300'>
                                <ClipboardIcon className='w-[18px]' />
                                Copy response
                            </button>

                            <button className='flex items-center gap-1 hover:brightness-125 duration-300'>
                                <ArrowPathIcon className='w-[18px]' />
                                Regenerate
                            </button>

                        </div>

                    </div>
                )}


            </div>



            <button onClick={() => {
                if (currState === undefined) setCurrState(null)
                else setCurrState(undefined)
            }}
                className='flex p-2 px-3 hover:brightness-[115%] rounded-full items-center gap-2 text-sm bg-primary/10 text-primary duration-200'
            >
                <SparklesIcon className='shrink-0 size-4' />
                Ask AI
            </button>

        </div>
    )
}

export default AskAI