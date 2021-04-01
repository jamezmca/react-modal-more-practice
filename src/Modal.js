import React, { useState, forwardRef, useImperativeHandle } from 'react'
import ReactDom from 'react-dom'

export const Modal = forwardRef((props, ref) => {
    const [display, setDisplay] = useState(true)

    useImperativeHandle(ref, () => {
        return {
            openModal: () => open(),
            close: () => close()
        }
    })

    function open() {
        setDisplay(true)
    }

    function close() {
        setDisplay(false)
    }
    

    return ReactDom.createPortal(
        <>
            {display ?
                <div className={"modal-wrapper"}>
                    <div onClick={close} className={'modal-backdrop'} />
                    <div className={"modal-box"}>
                        {props.children}
                    </div>
                </div> : null}
        </> , document.getElementById('portal')
    )
})
