import classNames from "classnames/bind";
import styles from './AccountItem.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(styles)
function AccountItem() {

    return (
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} loading="lazy" src="https://p9-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/d83c81509c6ca8275aa0c8db8cd9065e.jpeg?lk3s=a5d48078&nonce=73348&refresh_token=391a12a6ea0d1d23d3d044b446cfed99&x-expires=1736668800&x-signature=hqw6OmoWNkk6iEkBA3WpemWPeWI%3D&shp=a5d48078&shcp=81f88b70" alt="duydangngu" />
            <div className={cx('info')}>
                <h4 className={cx('name')}> Nguyen Anh Duy
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} >

                    </FontAwesomeIcon>
                </h4>
                <span className={cx('username')}>duydangngu</span>
            </div>
        </div>
    );
}

export default AccountItem;



