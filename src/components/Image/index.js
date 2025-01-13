import { forwardRef, useState } from 'react';
import images from '~/assets/images';
import styles from './Image.module.scss';
import classNames from 'classnames';

const Image = forwardRef(({ src, alt, className, ...props }, ref) => {

    const [fallback, setfallback] = useState('');
    const handleError = () => {
        setfallback(images.noImage);
    }
    return <img ref={ref}
        className={classNames(styles.wrapper, className)}
        src={fallback || src} alt={alt} {...props}
        onError={handleError} />
})

export default Image;