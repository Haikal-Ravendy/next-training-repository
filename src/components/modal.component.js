import Proptypes from 'prop-types';
import Button from './button.component';

function Modal(props){
    return (
        <>
        <div className={`fixed top-0 left-0 w-full ${props?.visible ? 'flex' : 'hidden'} items-center justify-center h-screen`}>
            <div className={'z-[1] relative w-2/4 h-3/4 mx-auto bg-white rounded-xl'}>

                {props.children}
            </div>
            <div className={'absolute top-0 left-0 z-[0] bg-black bg-opacity-50 w-full h-full'} onClick={props?.onChange}>

            </div>
        </div>
        </>
    )
}

Modal.propTypes = {
    visible: Proptypes.bool.isRequired,
    onChange: Proptypes.func.isRequired,
}
Modal.defaultProps = {
    visible: false,
    onChange: (events) => {console.log(events)},
}

export default Modal;