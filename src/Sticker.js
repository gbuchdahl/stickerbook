import React from 'react'
import './Sticker.css'


const emojis = ['😃', '🥳', '🔥', '✨', '😊', '🤩', '🤟', '💅', '💛', '😂', '😏', '😎', '🤠', '😤']
const Sticker = () => {
    return <div className='column box is-64x64 is-narrow mx-3'><span role='img' className='emoji'>{emojis[Math.floor(Math.random() * emojis.length)]}</span></div>
}

export default Sticker;