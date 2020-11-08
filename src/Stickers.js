import React from 'react';
import _ from 'lodash';
import Sticker from './Sticker'

const Stickers = (props) => {
    const stickers = _.times(props.number, () => <Sticker />)
    console.log(stickers)
    return (<div>
        <div className='columns'>
            {stickers.map((s) => s)}
            <div></div>
        </div>
    </div>);
}


export default Stickers;