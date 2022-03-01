import React, { useState } from 'react'
import classes from './Image.module.scss';

const Image = ({ image }) => {
  const [author, setAuthor] = useState(false);
  const styles = [
      classes.author,
      author && classes.author_animated,
    ];
  const spanStyles = styles.join(' ');
  const setAuthorHandler = () => {
    setAuthor(prevState => !prevState);
  }
  return (
    <div className={classes.container}>
      <img
        className={classes.image}
        src={image?.download_url}
        alt='random pic'
        onMouseOver={setAuthorHandler}
        onMouseLeave={setAuthorHandler}
      />
      {author && <span className={spanStyles}>{`<by ${image.author}/>`}</span>}
    </div>
  )
}

export default Image