import { useDispatch, useSelector } from 'react-redux'
import { modalShowSelector } from '../redux/selectors'
import { toggleModalShow } from '../redux/slices/themeSlice'

const ModalConfirmDelete = ({ message, onDelete }) => {
    const isModalShow = useSelector(modalShowSelector)
    const dispatch = useDispatch()
    const toggleModal = () => {
        dispatch(toggleModalShow())
    }

    const handleDelete = () => {
        onDelete()
        toggleModal()
    }

    return (
        <div className={`fixed ${!isModalShow && 'hidden'}`}>
            <div
                className='fixed top-0 left-0 right-0 bottom-0 bg-black/70'
                onClick={toggleModal}
            ></div>
            <div className='fixed top-40 left-10 right-10 md:left-1/2 md:right-auto md:-translate-x-1/2 bg-white p-5 rounded-lg'>
                <h4 className='text-xl font-bold'>{message}</h4>
                <div className='mt-10 text-right text-white'>
                    <button
                        className='bg-zinc-500 px-4 py-2 rounded-md transition-all hover:bg-zinc-600'
                        onClick={toggleModal}
                    >
                        Cancel
                    </button>
                    <button
                        className='ml-4 bg-red-700 px-4 py-2 rounded-md transition-all hover:bg-red-800'
                        onClick={handleDelete}
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    )
}
export default ModalConfirmDelete
