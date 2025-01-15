import classNames from "classnames/bind";
import styles from "./SuggestedAccounts.module.scss";
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";


const cx = classNames.bind(styles);
function AccountItem() {
    return (
        <div className={cx('account-item')}>
            <img
                className={cx('avatar')}
                src="https://p9-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/d83c81509c6ca8275aa0c8db8cd9065e.jpeg?lk3s=a5d48078&nonce=73348&refresh_token=391a12a6ea0d1d23d3d044b446cfed99&x-expires=1736668800&x-signature=hqw6OmoWNkk6iEkBA3WpemWPeWI%3D&shp=a5d48078&shcp=81f88b70"
                alt="" />

            <div className={cx('item-info')}>
                <p className={cx('name')}>
                    <strong>Nguyen Anh Duy</strong>
                    <FontAwesomeIcon icon={faCheckCircle}>

                    </FontAwesomeIcon>
                </p>
                <p className={cx('nickname ')}>duydangngu</p>
            </div>
        </div>
    );
}
AccountItem.propTypes = {

}
export default AccountItem;