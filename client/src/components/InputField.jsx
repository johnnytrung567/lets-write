const InputField = ({
    wrapperStyles = '',
    inputId,
    label,
    register,
    errors,
    required,
    validations,
    ...inputProps
}) => {
    return (
        <div className={`${wrapperStyles}`}>
            <label htmlFor={inputId} className='text-lg block mb-1'>
                {label}
            </label>
            <input
                id={inputId}
                {...inputProps}
                className=' border-2 outline-none rounded-md w-full p-1.5 focus:border-teal-800 dark:focus:border-teal-500 dark:text-gray-700'
                {...register(inputId, {
                    required:
                        required && `Please enter your ${label.toLowerCase()}`,
                    ...validations,
                })}
            />
            {errors && (
                <span className='text-red-500 text-xs'>{errors.message}</span>
            )}
        </div>
    )
}
export default InputField
