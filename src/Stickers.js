import React from 'react';
import _ from 'lodash';

const Stickers = (props) => {
    const stickers = _.times(props.number, () => <div className='column box is-64x64 is-narrow mx-3'><p>🥳</p></div>)
    console.log(stickers)
    return (<div>
        <div className='columns'>
            {stickers.map((s) => s)}
            <div></div>
        </div>
    </div>);
}


export default Stickers;