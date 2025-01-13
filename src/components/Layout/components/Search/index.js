import { useEffect, useState, useRef } from 'react';
import HeadlessTippy from '@tippyjs/react/headless';
import AccountItem from '~/components/AccountItem';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { useDebounce } from '~/hooks';
import { SearchIcon } from '~/components/Icons';
import * as searchServices from '~/apiServices/searchServices';


import {
    faCircleXmark,
    faSpinner,
} from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);


function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(true);
    const debounced = useDebounce(searchValue, 500);
    const inputRef = useRef();
    const handleClear = () => {

        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();

    }
    const handleHideResult = () => {
        setShowResult(false);
    }
    useEffect(() => {
        if (!debounced.trim()) {
            setSearchResult([]);
            setLoading(false);
            return;
        }
        setLoading(true);
        const fetchApi = async () => {
            setLoading(true);

            const result = await searchServices.search(debounced);
            setSearchResult(result);

            setLoading(false);
        }

        fetchApi();
    }, [debounced]);
    return (
        <HeadlessTippy
            interactive
            visible={showResult && searchResult.length > 0}
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx('search-title')}>Accounts</h4>
                        {
                            searchResult.map((result) => (
                                <AccountItem key={result.id} data={result} />
                            ))
                        }

                    </PopperWrapper>
                </div>
            )}
            onClickOutside={handleHideResult}>
            <div className={cx('search')}>
                <input
                    ref={inputRef}
                    value={searchValue}
                    placeholder="Search accounts and videos"
                    spellCheck={false}
                    onChange={(e) => setSearchValue(e.target.value)}
                    onFocus={() => setShowResult(true)}
                />
                {!!searchValue && !loading && (
                    <button className={cx('clear')}
                        onClick={handleClear}
                    >
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}
                {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}

                <button className={cx('search-btn')}>
                    <SearchIcon />
                </button>
            </div>
        </HeadlessTippy >
    );
}

export default Search;