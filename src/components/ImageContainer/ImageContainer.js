import React from 'react'
import classes from './ImageContainer.module.scss';

const ImageContainer = ({children}) => {
  return (
      <div className={classes.container}>{children}</div>
  )
}

export default ImageContainer