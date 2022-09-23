import './index.scss';

const AnimatedBlob = ({ blobClass }) => {
    return(
        <div className={blobClass}>
            <svg viewBox="0 0 800 500" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="100%" id="blobSvg">
                <g transform="translate(124.03184509277344, 5.924526214599609)">
                    <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" className='blob-top-color'></stop>
                        <stop offset="100%" className='blob-bottom-color'></stop>
                    </linearGradient>
                    </defs>
                    <path className="blob" fill="url(#gradient)">
                        <animate attributeName='d'
                        dur='7s'
                        repeatCount='indefinite'
                        values="M461.5,323.5Q452,397,382,419Q312,441,246.5,451.5Q181,462,116,428Q51,394,49.5,322Q48,250,71,193.5Q94,137,140.5,96.5Q187,56,257,34.5Q327,13,357.5,81.5Q388,150,429.5,200Q471,250,461.5,323.5Z;
                        M459.5,313.5Q425,377,368,408Q311,439,249,441.5Q187,444,144,401Q101,358,52.5,304Q4,250,46,191.5Q88,133,136.5,91.5Q185,50,252.5,43Q320,36,349.5,96Q379,156,436.5,203Q494,250,459.5,313.5Z;
                        M447,314Q426,378,367,404Q308,430,244,448.5Q180,467,121.5,426.5Q63,386,46.5,318Q30,250,64.5,195Q99,140,140,88Q181,36,242,61.5Q303,87,368.5,101.5Q434,116,451,183Q468,250,447,314Z;
                        M394,295Q373,340,348.5,408Q324,476,259.5,447.5Q195,419,142,393Q89,367,55.5,308.5Q22,250,42,182Q62,114,117.5,64Q173,14,248.5,18Q324,22,358,84.5Q392,147,403.5,198.5Q415,250,394,295Z;
                        M461.5,323.5Q452,397,382,419Q312,441,246.5,451.5Q181,462,116,428Q51,394,49.5,322Q48,250,71,193.5Q94,137,140.5,96.5Q187,56,257,34.5Q327,13,357.5,81.5Q388,150,429.5,200Q471,250,461.5,323.5Z">

                        </animate>
                    </path>
                </g>
            </svg>
        </div>
    )
}

export default AnimatedBlob;
