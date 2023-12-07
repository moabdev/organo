import React from 'react'
import banner from '../../assets/imagens/banner.png'
import styles from './Banner.module.css'

const Banner = () => {
  
  return (
    <header className={styles.banner}>
      <img src={banner} alt='O banner principal da página organo' /> 
    </header>
  )
}


export default Banner