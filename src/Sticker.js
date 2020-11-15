import React from 'react'
import './Sticker.css'


const emojis = ['😃', '🥳', '🔥', '✨', '😊', '🤩', '🤟', '💅', '💛', '😂', '😏', '😎', '🤠', '😤']
const Sticker = (props) => {
    let classes = 'emoji';
    if (props.n % 3 === 0) classes += ' pulse'
    else if (props.n % 3 === 1) classes += ' pulse4'
    else classes += ' pulse5'

    return <div className='column box is-64x64 is-narrow mx-3'><span role='img' className={classes}>{emojis[Math.floor(Math.random() * emojis.length)]}</span></div>
}

export default Sticker;