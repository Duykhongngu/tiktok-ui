import classNames from 'classnames/bind';
import PropTypes from 'prop-types'
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);
function Button({
    children,
    to,
    href,
    className,
    onClick,
    primary,
    outline,
    leftIcon,
    rightIcon,
    text = false,
    small = false,
    disabled = false,
    rounded = false,
    large = false, ...passProps
}) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps
    }
    // Remove event listener when btn is disabled
    if (disabled) {
        Object.keys(props).forEach(key => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        })
    }
    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    const classes = cx('wrapper', {
        primary,
        outline,
        small,
        large,
        text,
        disabled,
        rounded,
        [className]: className,
    })
    return (
        <Comp className={classes}{...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    to: PropTypes.string,
    href: PropTypes.string,
    className: PropTypes.string,
    primary: PropTypes.bool,
    outline: PropTypes.bool,
    text: PropTypes.bool,
    small: PropTypes.bool,
    disabled: PropTypes.bool,
    rounded: PropTypes.bool,
    large: PropTypes.bool,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    onClick: PropTypes.func,

};


export default Button;