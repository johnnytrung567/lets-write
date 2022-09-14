import CountUp from 'react-countup'
import aboutImage from '../../assets/images/about.jpg'
import { commitmentData, counterData, feedbackData } from './data'

const About = () => {
    return (
        <div className='my-16 flex flex-wrap'>
            {/* Introduction */}
            <section className='max-w-7xl mx-auto flex flex-wrap items-center'>
                <div
                    data-aos='fade-right'
                    className='w-full md:w-1/2 px-4 pb-8'
                >
                    <img src={aboutImage} alt='About' className='w-full' />
                </div>
                <div data-aos='fade-left' className='w-full md:w-1/2 px-4 pb-8'>
                    <h1 className='text-[40px] font-bold mb-5'>
                        About Let's Write
                    </h1>

                    <p>
                        Hello, Welcome to Let's Write also, I am happy you want
                        to know something more about my site
                    </p>
                    <p>
                        So, basically, nowadays people are more dependent on
                        online products and services that's why I also, take
                        forward a step to help you.
                    </p>
                    <p>
                        My first wish is to provide you with a better solution
                        to solve your problem. So, kindly if you don't get any
                        solution then mention it in the comment section.
                    </p>
                    <p>
                        In the below section you can get more ideas about my
                        site like my website category and content category.
                    </p>
                    <p>
                        If you have additional questions or require more
                        information about Let's Write, do not hesitate to
                        contact me through email at vantrung242628@gmail.com.
                    </p>

                    <br />
                    <p>Sincerely,</p>

                    <p>Ma Van Trung</p>
                </div>
            </section>

            {/* Commitments */}
            <section className='max-w-7xl mx-auto mt-20 flex flex-wrap'>
                {commitmentData.map((item, index) => {
                    const Icon = item.icon
                    return (
                        <div
                            key={index}
                            data-aos='fade-left'
                            className={`flex w-full px-4 pb-8 sm:w-1/2 md:w-1/3`}
                        >
                            <Icon size={60} />
                            <div className='flex-1 pl-4'>
                                <h3 className='text-xl mb-2.5 font-bold'>
                                    {item.title}
                                </h3>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    )
                })}
            </section>

            {/* ParallaxCounter */}
            <section className="w-full mt-14 pt-16 pb-20 bg-[url('/images/parallax-background.jpg')] bg-center bg-cover bg-fixed relative z-0 after:-z-[1] after:absolute after:top-0 after:bottom-0 after:left-0 after:right-0 after:bg-black/70">
                <div className='text-white flex flex-wrap max-w-7xl mx-auto'>
                    {counterData.map((item, index) => (
                        <div
                            key={index}
                            className='text-center uppercase p-4 w-1/2 md:w-1/4'
                        >
                            <CountUp
                                end={item.quantity}
                                enableScrollSpy={true}
                                scrollSpyOnce={true}
                                className='text-[40px] font-bold'
                            />
                            <p>{item.title}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Feedbacks */}
            <section className='w-full max-w-7xl mx-auto pt-16 flex flex-wrap'>
                {feedbackData.map((item, index) => (
                    <div
                        key={index}
                        data-aos='flip-left'
                        className='italic w-full md:w-1/3 text-center px-4 pb-9 flex flex-col   '
                    >
                        <div className='w-[100px] h-[100px] rounded-full object-cover overflow-hidden mx-auto mb-4'>
                            <img src={item.avatar} alt={item.name} />
                        </div>
                        <p className='mb-4'>{item.content}</p>
                        <p className='text-xl font-bold mt-auto'>{item.name}</p>
                    </div>
                ))}
            </section>
        </div>
    )
}
export default About
