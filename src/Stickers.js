import React, { useMemo } from 'react';
import _ from 'lodash';
import Sticker from './Sticker'

const Stickers = (props) => {
    const stickers = useMemo(() => _.times(props.number, (i) => <Sticker n={i} />), [props.number])
    console.log(stickers)
    return (<div>
        <div className='columns is-multiline'>
            {stickers.map((s) => s)}
            <div></div>
        </div>
    </div>);
}


export default Stickers;