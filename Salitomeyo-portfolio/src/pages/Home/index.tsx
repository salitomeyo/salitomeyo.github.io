import './index.scss';
import Logo from '../../assets/images/temporary-logo.png';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import AnimatedLetters from '../../components/AnimatedLetters';
import AnimatedBlob from '../../components/AnimatedBlob';

export const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = ['S', 'a', 'l', 'i', 't', 'o', 'm', 'e', 'y', 'o'];
    const jobArray = ['W', 'e', 'b', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']; 

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return(
        <div className="container">
            <div>
                <h1>
                    Hi <br /> I'm <span className='name'><AnimatedLetters 
                        letterClass={letterClass}
                        strArray={nameArray}
                        idx={1}
                    /></span><br />
                    <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={jobArray}
                        idx={10}
                    />
                </h1>
                <h2>Frontend Developer / Game Developer / Mobile Developer </h2>

                <Link to="/contact">
                    <button className='btn-outline'>CONTACT ME</button>
                </Link>
                </div>
            <div>
                <AnimatedBlob blobClass={"blob-container"}/>
                <AnimatedBlob blobClass={"blob-glow"}/>
                <img src={Logo} alt="" />
            </div>
        </ div>

    )
}

