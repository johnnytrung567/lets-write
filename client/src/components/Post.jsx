const Post = () => {
    return (
        <div className='w-1/2 px-5 py-8'>
            <img
                src='https://images.unsplash.com/photo-1657664042482-a6e53c1b03a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80'
                alt=''
                className='rounded-lg w-full max-h-72 object-cover cursor-pointer'
            />
            <div className='flex flex-col items-center'>
                <div className='text-sky-500 text-xs mt-4 font-varelaRound'>
                    <span className='mx-1.5 cursor-pointer before:content-["#"]'>
                        Life
                    </span>
                    <span className='mx-1.5 cursor-pointer before:content-["#"]'>
                        Music
                    </span>
                </div>
                <h3 className='text-2xl font-bold font-josefin cursor-pointer mt-4'>
                    Lorem ipsum dolor sit amet consectetur.
                </h3>
                <span className='mt-4 text-gray-400 italic font-lora text-sm'>
                    1 hour ago
                </span>
            </div>
            <p className='mt-4 font-varelaRound text-gray-700 dark:text-gray-300 overflow-hidden text-ellipsis leading-7 max-h-28'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta
                impedit aperiam labore aliquid neque aspernatur modi atque
                expedita non, sunt explicabo vitae reiciendis ipsam, veniam
                earum eius repellat dolore libero.Lorem, ipsum dolor sit amet
                consectetur adipisicing elit. Dicta impedit aperiam labore
                aliquid neque aspernatur modi atque expedita non, sunt explicabo
                vitae reiciendis ipsam, veniam earum eius repellat dolore
                libero.
            </p>
        </div>
    )
}
export default Post
