import { forwardRef, useState } from 'react';
import images from '~/assets/images';
import styles from './Image.module.scss';
import classNames from 'classnames';
import PropTypes from 'prop-types'


const Image = forwardRef(({ src, alt, className, fallback: customFallback = images.noImage, ...props }, ref) => {

    const [fallback, setfallback] = useState('');
    const handleError = () => {
        setfallback(images.noImage);
    }
    return <img ref={ref}
        className={classNames(styles.wrapper, className)}
        src={fallback || src} alt={alt} {...props}
        onError={handleError} />
})
Image.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    className: PropTypes.string,
    fallback: PropTypes.string,
};
export default Image;