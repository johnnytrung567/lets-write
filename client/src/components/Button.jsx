const Button = ({ customStyles = '', children }) => {
    return (
        <button
            className={`block rounded-lg bg-teal-600 text-white py-2 px-4 transition-all hover:bg-teal-700 ${customStyles}`}
        >
            {children}
        </button>
    )
}
export default Button
