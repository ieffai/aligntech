import React, { memo } from 'react'
import { ImagePreview } from '..';
import classes from './ImageScrollBar.module.scss';
import { IoArrowForward, IoArrowBack } from 'react-icons/io5';

const ImageScrollBar = ({images, current, setCurrent}) => {
  const length = images.length-1;

  const nextSlide = () => {
   setCurrent(length === current ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? 4 : current - 1);
  }
  return (
    <div className={classes.scrollbar}>
      <IoArrowBack className={classes.arrow} onClick={prevSlide} />
      {images.map(image => (
        <ImagePreview key={image.id} image={image} current={current} setCurrent={setCurrent}/>
      ))}
      <IoArrowForward className={classes.arrow} onClick={nextSlide}/>

    </div>
  )
}

export default memo(ImageScrollBar)