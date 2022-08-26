import { Parallax } from 'react-parallax';
import slide_base from "./img/slide_base.jpeg";

const SecondImage = () => (
    <Parallax className='image' bgImage={slide_base} strength={400}>
        <div className='content'>
            <span className='img-text'>Direction les PLayoffs pour l'équipe de Toronto</span>
        </div>
    </Parallax>
);

export default SecondImage;