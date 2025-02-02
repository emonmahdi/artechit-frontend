import React from 'react'
import './../../styles/SectionTitle.css'

const SectionTitle = ({title}) => {
  return (
    <h2 className='section-title-common text-center text-4xl font-bold py-8'>{title}</h2>
  )
}

export default SectionTitle