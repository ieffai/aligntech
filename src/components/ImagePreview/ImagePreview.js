import React from 'react'
import { useSelector } from 'react-redux';
import { getImagesSelector } from '../../redux/images/selectors';
import classes from './ImagePreview.module.scss';

const ImagePreview = ({ image, current, setCurrent }) => {
  const images = useSelector(getImagesSelector);
  const idArray = images.map(item => (item.id));
  const position = idArray.indexOf(image.id);
  const isSelected = current === position;
  const styles = [
    classes.img,
    isSelected && classes.img_selected,
  ];
  const imgStyles = styles.join(' ');
  const handler = () => {
    setCurrent(position)
  }
  return (
        <div className={classes.preview}>
          <img className={imgStyles} src={image.thumb_url} alt="preview" onClick={handler}/>
        </div>
  )
}

export default ImagePreview