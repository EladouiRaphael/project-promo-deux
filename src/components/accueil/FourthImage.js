import { Parallax } from 'react-parallax';
import slide_base from "./img/pitch_boy.jpeg";

const FourthImage = () => (
    <Parallax className='image' bgImage={slide_base} strength={400}>
        <div className='content'>
            <span className='img-text'>Thanks To the new rookie who made a no hit game </span>
        </div>
    </Parallax>
);

export default FourthImage;