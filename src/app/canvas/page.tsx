import WritingHeader from '@/components/writing/WritingHeader'
import Refrences from '@/components/writing/Refrences'
import WritingAssistant from '@/components/writing/WritingAssistant'
import AskAI from '@/components/writing/AskAI'
import ResourcesSearch from '@/components/canvas/ResourcesSearch'

function Page() {
    return (
        <div className='h-screen bg-background overflow-hidden relative'>
            <main className='flex flex-col gap-4 h-full'>
                <div className='shrink-0'>
                    <WritingHeader />
                </div>

                <div className='relative flex p-4 h-full gap-6'>

                    <div className='shrink-0'>
                        <ResourcesSearch />
                    </div>

                    <div className='bg-background-secondary w-full h-full rounded-2xl'>

                    </div>

                    {/* <div className='shrink-0'>
                        <Refrences />
                    </div>

                    <div className='w-full max-w-4xl h-full mx-auto px-10 overflow-auto'>
                        <div className='h-full'>
                            <WritingAssistant />
                        </div>
                    </div> */}

                </div>

            </main>

            {/* <div className='fixed bottom-6 left-1/2 p-4 transform z-20 -translate-x-1/2'>
                <AskAI />
            </div> */}

        </div>
    )
}

export default Page