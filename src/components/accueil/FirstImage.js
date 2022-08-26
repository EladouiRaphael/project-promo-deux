import { Parallax } from 'react-parallax';
import Stadium from "./img/stadium.jpeg";
import Logo from "./img/blue_jays_logo.jpeg";

const FirstImage = () => (
    <Parallax className='image' bgImage={Stadium} strength={400}>
        <div className='content'>
            <span>
                <img src={Logo} strength={500} alt="logo"/>
            </span>
        </div>
    </Parallax>
);

export default FirstImage;