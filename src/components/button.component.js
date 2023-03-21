import PropTypes from 'prop-types';

function Button(props){
    return (<button
        type={props?.htmlType}
        onClick={props?.onClick}
        className={'btn-special'}>{props?.children}</button>)
}

Button.propTypes = {
    htmlType: PropTypes.oneOf(['button', 'submit']).isRequired,
    type: PropTypes.oneOf(['primary', 'default']),
    onClick: PropTypes.func.isRequired,
};
Button.defaultProps = {
    htmlType: 'button',
    type: 'default',
    onClick: (events) => {console.log(events)},
};

export default Button;