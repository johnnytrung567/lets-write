const Button = ({ customStyles = '', children, ...btnProps }) => {
    return (
        <button
            className={`block rounded-lg bg-teal-600 text-white py-2 px-4 transition-all hover:bg-teal-700 disabled:opacity-50 disabled:bg-teal-600 ${customStyles}`}
            {...btnProps}
        >
            {children}
        </button>
    )
}
export default Button
