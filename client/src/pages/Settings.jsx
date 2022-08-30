import { FaUserCircle } from 'react-icons/fa'
import Button from '../components/Button'
import InputField from '../components/InputField'
import PersonalInfo from '../components/PersonalInfo'

const Settings = () => {
    return (
        <div className='flex mt-10'>
            <div className='w-2/3 px-5 py-8'>
                <div className='flex justify-between'>
                    <h3 className='text-3xl text-teal-700'>
                        Update Your Account
                    </h3>
                    <span className='text-red-700 cursor-pointer'>
                        Delete Account
                    </span>
                </div>
                <form className='mt-7 max-w-sm mx-auto'>
                    <label className='text-lg block mb-1'>
                        Profile Picture
                    </label>
                    <div className='flex items-center'>
                        <img
                            src='https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'
                            alt=''
                            className='w-28 h-28 object-cover rounded-2xl'
                        />
                        <label htmlFor='avatar'>
                            <FaUserCircle
                                size={24}
                                className='text-teal-600 ml-3 cursor-pointer'
                            />
                        </label>
                        <input type='file' id='avatar' className='hidden' />
                    </div>
                    <InputField
                        wrapperStyles='mt-4'
                        inputId='username'
                        label='Username'
                        value='trung234'
                    />
                    <InputField
                        wrapperStyles='mt-4'
                        type='email'
                        inputId='email'
                        label='Email'
                        value='example@gmail.com'
                    />
                    <InputField
                        wrapperStyles='mt-4'
                        type='password'
                        inputId='password'
                        label='Password'
                        value='123456'
                    />
                    <Button customStyles='px-20 block mx-auto mt-4'>
                        Update
                    </Button>
                </form>
            </div>
            <PersonalInfo />
        </div>
    )
}
export default Settings
