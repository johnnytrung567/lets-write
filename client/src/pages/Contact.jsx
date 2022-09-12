import { BsPinMapFill, BsTelephoneFill } from 'react-icons/bs'
import { GrMail } from 'react-icons/gr'

const Contact = () => {
    return (
        <div className='w-full max-w-7xl mx-auto my-16'>
            <section>
                <iframe
                    width='1230'
                    height='430'
                    frameBorder='0'
                    scrolling='no'
                    marginHeight='0'
                    marginWidth='0'
                    id='gmap_canvas'
                    src='https://maps.google.com/maps?width=1230&amp;height=430&amp;hl=en&amp;q=720%20A%20Dien%20Bien%20Phu%20Ho%20Chi%20Minh%20City+(Fashion%20Outfit%20Store)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'
                    className='w-full px-4'
                ></iframe>
                <script
                    type='text/javascript'
                    src='https://embedmaps.com/google-maps-authorization/script.js?id=1c9abcdad0cf33c6559c5e9748b6cff8eb7dc94d'
                ></script>
            </section>
            <section className='flex flex-wrap mt-20'>
                <div
                    data-aos='fade-right'
                    className='flex w-full sm:w-1/2 md:w-1/3 items-start px-4 pb-8'
                >
                    <div className='text-white dark:text-zinc-800 bg-gray-700 dark:bg-gray-300 w-10 h-10 flex justify-center items-center'>
                        <BsPinMapFill size={22} />
                    </div>
                    <div className='ml-4 flex-1'>
                        <p className='font-bold text-xl mb-2.5'>Address:</p>
                        <p>
                            720 A Dien Bien Phu, Ward 22, Binh Thanh District,
                            Ho Chi Minh City
                        </p>
                    </div>
                </div>
                <div
                    data-aos='fade-left'
                    data-aos-delay='100'
                    className='flex w-full sm:w-1/2 md:w-1/3 items-start px-4 pb-8'
                >
                    <div className='text-white dark:text-zinc-800 bg-gray-700 dark:bg-gray-300 w-10 h-10 flex justify-center items-center'>
                        <BsTelephoneFill size={22} />
                    </div>
                    <div className='ml-4 flex-1'>
                        <p className='font-bold text-xl mb-2.5'>Phone:</p>
                        <a href='tel:0123456789' className='font-bold'>
                            0123 456 789
                        </a>
                        <p>Dial 109 - Bussiness department</p>
                        <p>Dial 103 - Technical department</p>
                    </div>
                </div>
                <div
                    data-aos='fade-left'
                    data-aos-delay='200'
                    className='flex w-full sm:w-1/2 md:w-1/3 items-start px-4 pb-8'
                >
                    <div className='text-white dark:text-zinc-800 bg-gray-700 dark:bg-gray-300 w-10 h-10 flex justify-center items-center'>
                        <GrMail size={22} />
                    </div>
                    <div className='ml-4 flex-1'>
                        <p className='font-bold text-xl mb-2.5'>Email:</p>
                        <a
                            href='mailto:vantrung242628@gmail.com'
                            className='break-all'
                        >
                            vantrung242628@gmail.com
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Contact
