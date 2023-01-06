import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import '../style/Tech.css'

export default function Tech({ iconClass, imageLink, imageHover, name, i }) {
  const [hover, setHover] = useState(false);

  return (
    <motion.div
      className="technology-card"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      initial={{ opacity: 0, y: '-5vh' }}
      whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.07 * i } }}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.1 }
      }}>
      {iconClass && <i className={`${iconClass} ${hover ? 'colored' : ''}`}></i>}
      {imageLink && <img src={hover ? imageHover : imageLink } alt={`${name} Icon`}/>}
      <h3>{name}</h3>
    </motion.div>
  );
}

Tech.propTypes = {
  iconClass: PropTypes.string,
  imageLink: PropTypes.string,
  imageHover: PropTypes.string,
  name: PropTypes.string.isRequired,
  i: PropTypes.number.isRequired,
};
