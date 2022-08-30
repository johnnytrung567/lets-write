const InputField = ({
    wrapperStyles = '',
    type = 'text',
    inputId,
    label,
    placeholder = '',
    value = '',
}) => {
    return (
        <div className={`${wrapperStyles}`}>
            <label htmlFor={inputId} className='text-lg block mb-1'>
                {label}
            </label>
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                id={inputId}
                className=' border-2 outline-none rounded-md w-full p-1.5 focus:border-teal-800 dark:focus:border-teal-500 dark:text-gray-700'
            />
        </div>
    )
}
export default InputField
