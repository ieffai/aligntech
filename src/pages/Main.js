import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { CustomButton, Image, ImageContainer, ImageScrollBar } from '../components';
import { getImagesSelector } from '../redux/images/selectors';

const Main = () => {
    const images = useSelector(getImagesSelector)
    const hasImages = images.length > 0;
    const [current, setCurrent] = useState(2);

    return (
    <div className='page'>
            <ImageContainer>
                {
                    hasImages ? <Image image={images[current]}/> : <CustomButton />
                }
            </ImageContainer>
            <ImageScrollBar images={images} current={current} setCurrent={setCurrent}/>
    </div>
  )
}

export default Main