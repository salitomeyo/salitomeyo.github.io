import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faGitAlt, faReact, faUnity, faVuejs, faNode, faPython } from '@fortawesome/free-brands-svg-icons';
import './index.scss';

export const Contact = () => {
    const icons = [ faHtml5, faCss3Alt, faJs, faGitAlt, faReact, faUnity, faVuejs ];

    return (
        <div className='container-about'>
            <div>
                <h1>About me</h1>
                <p>I'm a Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim vero ad, iste aspernatur nulla nobis doloribus quidem omnis error reiciendis deserunt fugit! Tenetur laborum aspernatur neque nostrum laudantium quo vero!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint molestiae voluptas velit ipsam minus rem nulla autem, reiciendis nobis quis? Eveniet voluptate, dolores tempore totam sunt eius assumenda nihil repellat.
                </p>
                <p>I'm a Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim vero ad, iste aspernatur nulla nobis doloribus quidem omnis error reiciendis deserunt fugit! Tenetur laborum aspernatur neque nostrum laudantium quo vero!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint molestiae voluptas velit ipsam minus rem nulla autem, reiciendis nobis quis? Eveniet voluptate, dolores tempore totam sunt eius assumenda nihil repellat.
                </p>
                <p>I'm a Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim vero ad, iste aspernatur nulla nobis doloribus quidem omnis error reiciendis deserunt fugit! Tenetur laborum aspernatur neque nostrum laudantium quo vero!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint molestiae voluptas velit ipsam minus rem nulla autem, reiciendis nobis quis? Eveniet voluptate, dolores tempore totam sunt eius assumenda nihil repellat.
                </p>
            </div>
            <div>
                <div className='skills'>
                    {
                        icons.map( (icon, idx) => {
                            return(
                                <div key={idx} className={"hex " + ((idx==0 || idx==5) ? 'p-hex' : '')}>
                                    <FontAwesomeIcon icon={icon} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </ div>
    )
}
