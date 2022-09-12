import heroImg from '../assets/images/hero.jpg'

const Header = () => {
    return (
        <header className='mt-16 flex flex-col items-center font-lora text-gray-600 dark:text-gray-200'>
            <p className='text-lg md:text-xl absolute top-[18%] md:top-[16%]'>
                Together
            </p>
            <p className='text-6xl md:text-8xl absolute top-[21%] md:top-[19%]'>
                Let's
                <span className='text-sky-800'>Write</span>
            </p>
            <img
                src={heroImg}
                alt=''
                className='w-full h-64 md:h-[450px] mt-20 object-cover'
            />
        </header>
    )
}
export default Header
