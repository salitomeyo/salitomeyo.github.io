import './index.scss';
import Logo from '../../assets/images/temporary-logo.png';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import AnimatedLetters from '../../components/AnimatedLetters';
import AnimatedBlob from '../../components/AnimatedBlob';
import AnimatedBlobOutline from '../../components/AnimatedBlobOutline';

export const Projects = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray2 = ['S', 'a', 'l', 'i', 't', 'o', 'm', 'e', 'y', 'o'];
    const nameArray3 = ['S', 'a', 'l', 'o', 'm', 'e', ' ', 'A', 'r', 'i', 's', 't', 'i', 'z', 'a', 'b', 'a', 'l'];
    const nameArray = ['S', 'a', 'l', 'o', 'm', 'e'];

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 2000)
    }, [])

    return(
        <div className="home-container">
            <AnimatedBlobOutline blobClass={"blob-container"}/>
                <AnimatedBlobOutline blobClass={"blob-glow-outline"}/>
            <div>
                <h1>
                    Hi <br /> I'm <span className='name'><AnimatedLetters 
                        letterClass={letterClass}
                        strArray={nameArray}
                        idx={1}
                    /></span><br />
                    Web Developer
                </h1>
                <h2>Frontend Developer / Game Developer / Mobile Developer </h2>

                <Link to="/contact">
                    <button className='btn-outline'>CONTACT ME</button>
                </Link>
                </div>
            <div>
                <img src={Logo} alt="logo" />
            </div>
        </ div>

    )
}

