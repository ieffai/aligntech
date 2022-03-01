import React from 'react'
import { useDispatch } from 'react-redux';
import { getNewImages } from '../../api/imagesService';
import classes from './CustomButton.module.scss';

const CustomButton = () => {
  const dispatch = useDispatch();
  const handleClick = async () => {
    await dispatch(getNewImages())
  }
  return (
    <button className={classes.button} onClick={handleClick}>Get new images</button>
  )
}

export default CustomButton