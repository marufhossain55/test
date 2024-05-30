import React from 'react'

const SectionTitle = ({title,subTitle}) => {
  return (
    <div className='text-center mt-16 mb-12'>
        <h1 className='font-bold text-4xl mb-4'>{title}</h1>
        <p className='font-bold text-xl text-green-400'>{subTitle}</p>
    </div>
  )
}

export default SectionTitle