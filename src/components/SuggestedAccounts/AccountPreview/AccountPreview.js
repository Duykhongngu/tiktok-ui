import classNames from "classnames/bind";
import styles from './AccountPreview.module.scss'
import Button from "~/components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(styles)
function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img className={cx('avatar')}
                    src="https://p9-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/d83c81509c6ca8275aa0c8db8cd9065e.jpeg?lk3s=a5d48078&nonce=73348&refresh_token=391a12a6ea0d1d23d3d044b446cfed99&x-expires=1736668800&x-signature=hqw6OmoWNkk6iEkBA3WpemWPeWI%3D&shp=a5d48078&shcp=81f88b70"
                    alt="">
                </img>
                <Button className={cx('follow-btn')} primary >Follow</Button>
            </div>
            <div className={cx('body')}>
                <p className={cx('name')}>
                    <strong>Nguyen Anh Duy</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}>

                    </FontAwesomeIcon>
                </p>
                <p className={cx('nickname ')}>duydangngu</p>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>8.2M </strong>
                    <span className={cx('label')}>Followers</span>
                    <strong className={cx('value')}>800M </strong>
                    <span className={cx('label')}>Likes </span>
                </p>
            </div>
        </div>

    );
}

export default AccountPreview;