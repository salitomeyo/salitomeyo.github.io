import './index.scss';
import Logo from '../../assets/images/temporary-logo.png';

export const Home = () => {
    return(
        <div className="container">
            <div>
                <h1>
                    Hi <br /> I'm <span className='name'>Salitomeyo</span>
                </h1>
                <h2>Frontend Developer / Game Developer / Mobile Developer </h2>

                <button className='btn-outline'>Contact me</button>
                </div>
            <div>
                <img src={Logo} alt="" />
            </div>
        </ div>

    )
}

