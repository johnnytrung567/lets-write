import {
    FaFacebookSquare,
    FaTwitterSquare,
    FaInstagramSquare,
    FaPinterestSquare,
} from 'react-icons/fa'

const PersonalInfo = () => {
    return (
        <aside className='w-1/3 px-5 py-8'>
            <div className='pb-7 bg-[#fdfbfb] dark:bg-[#766969] rounded-lg flex flex-col items-center'>
                <div className='flex flex-col items-center'>
                    <p className='m-2.5 p-1.5 w-4/5 border-y uppercase text-xs text-gray-800 dark:text-gray-300 text-center font-semibold font-varelaRound'>
                        About me
                    </p>
                    <img
                        src='https://images.unsplash.com/photo-1542330952-bffc55e812b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjN8fHBlcnNvbnxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60'
                        alt=''
                        className='mt-4 px-7'
                    />
                    <p className='p-7'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Praesentium labore eius voluptatum corporis, beatae
                        quisquam exercitationem pariatur saepe. Ipsa, minus
                        nostrum culpa
                    </p>
                </div>
                <div className='flex flex-col items-center min-w-[80%]'>
                    <p className='m-2.5 p-1.5 w-4/5 border-y uppercase text-xs text-gray-800 dark:text-gray-300 text-center font-semibold font-varelaRound'>
                        Categories
                    </p>
                    <ul className='mb-7'>
                        <li className='inline-block w-1/2 mt-4 text-center cursor-pointer'>
                            Life
                        </li>
                        <li className='inline-block w-1/2 mt-4 text-center cursor-pointer'>
                            Music
                        </li>
                        <li className='inline-block w-1/2 mt-4 text-center cursor-pointer'>
                            Style
                        </li>
                        <li className='inline-block w-1/2 mt-4 text-center cursor-pointer'>
                            Sport
                        </li>
                        <li className='inline-block w-1/2 mt-4 text-center cursor-pointer'>
                            Tech
                        </li>
                        <li className='inline-block w-1/2 mt-4 text-center cursor-pointer'>
                            Cinema
                        </li>
                    </ul>
                </div>
                <div className='flex flex-col items-center min-w-[80%]'>
                    <p className='m-2.5 p-1.5 w-4/5 border-y uppercase text-xs text-gray-800 dark:text-gray-300 text-center font-semibold font-varelaRound'>
                        Follow us
                    </p>
                    <div className='flex justify-center text-lg text-gray-700 dark:text-gray-300'>
                        <a target='_blank' href='https://www.facebook.com/'>
                            <FaFacebookSquare className='mr-2.5' />
                        </a>
                        <a target='_blank' href='https://www.twitter.com/'>
                            <FaTwitterSquare className='mr-2.5' />
                        </a>
                        <a target='_blank' href='https://www.instagram.com/'>
                            <FaInstagramSquare className='mr-2.5' />
                        </a>
                        <a target='_blank' href='https://www.pinterest.com/'>
                            <FaPinterestSquare className='' />
                        </a>
                    </div>
                </div>
            </div>
        </aside>
    )
}
export default PersonalInfo
