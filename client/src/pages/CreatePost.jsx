/* eslint-disable no-unused-vars */
import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

import { preview } from '../assets';
import { getRandomPrompt } from '../utils';
import { FormField, Loader } from '../components';

const CreatePost = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    prompt: '',
    photo: '',
  })
  const [generatingImg, setgeneratingImg] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <section
      className='max-w-7xl mx-auto'
    >
      
    </section>
  )
}

export default CreatePost