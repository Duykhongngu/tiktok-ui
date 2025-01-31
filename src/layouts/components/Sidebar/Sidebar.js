import classNames from "classnames/bind";
import styles from './Sidebar.module.scss'
import config from '~/config';
import Menu, { MenuItem } from "./Menu";
import { FollowingActiveIcon, FollowingIcon, HomeIcon, HomeIconActive, LiveIcon, LiveIconActive } from "~/components/Icons";
import SuggestedAccounts from "~/components/SuggestedAccounts";


const cx = classNames.bind(styles);
function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For You" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeIconActive />} />
                <MenuItem title="Following" to={config.routes.following} icon={<FollowingIcon />} activeIcon={<FollowingActiveIcon />} />
                <MenuItem title="Live" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveIconActive />} />
            </Menu>

            <SuggestedAccounts label="Suggested accounts" />
            <SuggestedAccounts label="Following accounts" />

        </aside>
    );
}

export default Sidebar; 