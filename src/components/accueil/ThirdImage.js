import { Parallax } from 'react-parallax';
import slide_base from "./img/tag_out.jpeg";

const ThirdImage = () => (
    <Parallax className='image' bgImage={slide_base} strength={400}>
        <div className='content'>
            <span className='img-text'>An amazing Tag from the 3rd base defender Eric Ericson</span>
        </div>
    </Parallax>
);

export default ThirdImage;