
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleQuestion, faCircleXmark, faCloudUpload,
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faMagnifyingGlass,
    faMessage,
    faSpinner,
    faUser,
    faSignOut,
} from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';


import Button from '~/components/Button';
import styles from './Header.module.scss';
import images from '~/assets/images';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import Menu from '~/components/Popper/menu';
import 'tippy.js/dist/tippy.css';
import Tippy from '@tippyjs/react';
import HeadlessTippy from '@tippyjs/react/headless';


const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        }
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];
const cx = classNames.bind(styles);
function Header() {


    const curentUser = true;


    //handle logic
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                //handle change language
                break;
            default:
        }
    }
    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/@duydangngu',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/coin',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/settings',
            separator: true,
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        }
    ]
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="Tiktok" />
                </div>
                <HeadlessTippy
                    interactive

                    render={attrs => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>Accounts</h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />

                            </PopperWrapper>
                        </div>
                    )}>

                    <div className={cx('search')}>
                        <input placeholder="Search accounts and videos" spellCheck={false} />

                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </HeadlessTippy >
                <div className={cx('actions')}>
                    {curentUser ? (
                        <>
                            <Tippy delay={[300, 300]} content="Upload video" placement='bottom'>
                                <button className={cx('action-btn')}>
                                    <FontAwesomeIcon icon={faCloudUpload} />
                                </button>
                            </Tippy>
                            <button className={cx('action-btn')}>
                                <FontAwesomeIcon icon={faMessage} />
                            </button>

                        </>
                    ) : (
                        <>  <Button text>Upload</Button>
                            <Button primary >Log in</Button>

                        </>
                    )}
                    <Menu
                        items={curentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {curentUser ? (
                            <img className={cx('user-avartar')}
                                src="https://p9-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/d83c81509c6ca8275aa0c8db8cd9065e.jpeg?lk3s=a5d48078&nonce=73348&refresh_token=391a12a6ea0d1d23d3d044b446cfed99&x-expires=1736668800&x-signature=hqw6OmoWNkk6iEkBA3WpemWPeWI%3D&shp=a5d48078&shcp=81f88b70" alt="Nguyen Anh Duy" />
                        ) : (


                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>

                </div>



            </div>
        </header >
    );
}

export default Header;