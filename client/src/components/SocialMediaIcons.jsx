import {
    FaFacebookSquare,
    FaTwitterSquare,
    FaInstagramSquare,
    FaPinterestSquare,
} from 'react-icons/fa'

const SocialMediaIcons = ({ customClass = '' }) => {
    return (
        <div
            className={`flex flex-wrap items-center text-xl text-gray-700 dark:text-gray-300 ${customClass}`}
        >
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
                <FaPinterestSquare />
            </a>
        </div>
    )
}
export default SocialMediaIcons
