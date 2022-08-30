import { useState } from 'react'
import { MdAddPhotoAlternate } from 'react-icons/md'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import Button from '../components/Button'

const Write = () => {
    const [content, setContent] = useState('')

    return (
        <div className='w-full px-3 mt-16 pb-5'>
            <form className='max-w-6xl mx-auto'>
                <img
                    src='https://images.unsplash.com/photo-1657664042482-a6e53c1b03a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80'
                    alt=''
                    className='w-full h-80 object-cover rounded-lg'
                />
                <div className='flex items-center'>
                    <label
                        htmlFor='image'
                        className='w-9 h-9 rounded-full border flex justify-center items-center border-gray-500 text-gray-500 cursor-pointer'
                    >
                        <MdAddPhotoAlternate size={24} />
                    </label>
                    <input type='file' id='image' className='hidden' />
                    <input
                        type='text'
                        placeholder='Title'
                        className='text-4xl outline-none p-5 w-full font-josefin dark:bg-zinc-800 '
                    />
                </div>
                <ReactQuill
                    placeholder='Write something...'
                    className='text-center dark:bg-zinc-300'
                    modules={{
                        toolbar: [
                            [{ header: [1, 2, 3, false] }],
                            [
                                'bold',
                                'italic',
                                'underline',
                                'strike',
                                'blockquote',
                            ],
                            [
                                { list: 'ordered' },
                                { list: 'bullet' },
                                { indent: '-1' },
                                { indent: '+1' },
                            ],
                            ['link'],
                            ['clean'],
                        ],
                    }}
                    formats={[
                        'header',
                        'bold',
                        'italic',
                        'underline',
                        'strike',
                        'blockquote',
                        'list',
                        'bullet',
                        'indent',
                        'link',
                    ]}
                >
                    <div
                        value={content}
                        onChange={value => setContent(value)}
                        className='text-xl font-varelaRound min-h-[300px] rounded-b-lg dark:bg-zinc-500 dark:text-gray-100'
                    />
                </ReactQuill>
                <Button customStyles='fixed right-8 bottom-8'>Publish</Button>
            </form>
        </div>
    )
}
export default Write
