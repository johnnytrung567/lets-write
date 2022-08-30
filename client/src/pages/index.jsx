import Header from '../components/Header'
import PersonalInfo from '../components/PersonalInfo'
import Posts from '../components/Posts'

const Home = () => {
    return (
        <>
            <Header />
            <div className='flex'>
                <Posts />
                <PersonalInfo />
            </div>
        </>
    )
}
export default Home
