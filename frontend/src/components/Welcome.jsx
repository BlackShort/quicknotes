import img1 from '../assets/img1.jpg';
import { Link } from 'react-router-dom'

const Welcome = () => {
    return (
        <div className='App_Welcome'>
            <div className="left">
                <h4>
                    Keep all your notes at one place!
                </h4>
                <p>
                    Seamlessly organize all your notes in one place for effortless access and enhanced productivity. Experience the ultimate note-taking simplicity. Start streamlining your ideas now!
                </p>
                <Link to={'/home'}><button type="button" id="save">Start Saving</button></Link>
            </div>
            <div className="right">
                <img src={img1} loading='lazy' alt="SidePhoto" />
            </div>
        </div>
    )
}

export default Welcome