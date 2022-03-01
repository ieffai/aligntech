import React from 'react'
import classes from './Header.module.scss';
import { IMG_LOGO } from '../../utils/images';

const Header = () => {
  return (
      <header className={classes.header}>
        <div className={classes.header__logo}>
            <img src={IMG_LOGO} alt="AlignTech logo" />
          </div>
          <div className={classes.header__info}>

          <div className={classes.header__line} />
          <span>Gallery by Sergey Karlinskiy</span>
          </div>
    </header>
  )
}

export default Header