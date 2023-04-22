import styles from '../styles/About.module.css'

import Image from "next/image"

const About = () => {
  return (
    <div className={styles.about}>
      <h1>Sobre o projeto</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque dignissimos harum architecto quaerat quasi tenetur, inventore earum a asperiores autem officiis cumque ex consequatur, repudiandae vero nostrum sunt adipisci odio?</p>
      <Image 
        src='/images/charizard.png' 
        width={300} height={300} 
        alt='Charizard' 
        priority={true}
      />
    </div>
  )
}

export default About