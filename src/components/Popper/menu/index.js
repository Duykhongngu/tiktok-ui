import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import MenuItem from './MenuItem';
import Headers from './Header';
import { useState } from 'react';
import { Wrapper as PopperWrapper } from '~/components/Popper';

const defaultFn = () => { };
const cx = classNames.bind(styles);
function Menu({ children, items = [], onChange = defaultFn, hideOnClick = false }) {
    const [history, setHistory] = useState([{ data: items }]);
    const curent = history[history.length - 1];
    const renderItems = () => {
        return curent.data.map((item, index) => {
            const isParent = !!item.children;
            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => [...prev, item.children]);
                        } else {
                            onChange(item);
                        }
                    }}
                />
            )
        }

        );
    };
    return (
        <Tippy

            offset={[12, 8]}
            hideOnClick={hideOnClick}
            interactive
            placement='bottom-end'
            delay={[0, 500]}
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>
                        {history.length > 1 &&
                            <Headers title="Lannguage"
                                onBack={() => setHistory((prev) =>
                                    prev.slice(0, prev.length - 1))} />
                        }
                        <div className={cx('menu-body')}>{renderItems()}</div>
                    </PopperWrapper>
                </div>
            )}
            onHide={() => setHistory((prev) => prev.slice(0, 1))}
        >

            {children}
        </Tippy>
    );
}

export default Menu;