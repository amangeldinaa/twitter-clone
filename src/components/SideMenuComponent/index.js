import { BOOKMARKS_SVG, EXPLORE_SVG, HOME_SVG, MESSAGES_SVG, NOTIFICATIONS_SVG } from './images';
import './styles.css';
import MenuItem from './MenuItem';

function SideMenu() {

    const menu = [
        {
            icon: HOME_SVG, 
            title: 'Home'
        },
        {
            icon: EXPLORE_SVG, 
            title: 'Explore'
        },
        {
            icon: NOTIFICATIONS_SVG, 
            title: 'Notifications'
        },
        {
            icon: MESSAGES_SVG, 
            title: 'Messages'
        },
        {
            icon: BOOKMARKS_SVG, 
            title: 'Bookmarks'
        },
    ]

    return (
        <div className="w-25 mt-3 mx-5"> 
            <img src={require('./images/twitter.png')} className="logo-icon mb-2"/>
            {menu.map((item, index) => <MenuItem key={index} title={item.title} icon={item.icon}/>)}
            
        </div>
    )
}

export default SideMenu;