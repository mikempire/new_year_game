import React from 'react';

const Char = (props) => {
    const [open, setOpen] = React.useState(false);
    // const cardClassName = 'Card' + (open ? ' Card--open' : '');
    return (
        <div className={'Char'}>
            <div className={'Scene'}>
                <div className={`Card ${open ? 'Card--open' : ''}`}
                    onClick={() => setOpen(!open)}>
                    <div className={'Card-face Card-face--front'}/>
                    <div className={'Card-face Card-face--back'}>
                        {props.char.toUpperCase()}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Char;