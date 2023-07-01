/* eslint-disable no-unused-vars */
import React from 'react'

const FormField = (
  { LabelName, type, name, placeholder, value, handleChange, isSurprisseMe, handleSurpriseMe }
) => {
  return (
    <div>
      <div className='flex items-center gap-2 mb-2'>
        <label
          htmlFor={name}
          className='block text font-medium text-gray-900'
        >

        </label>

      </div>
    </div>
  )
}

export default FormField