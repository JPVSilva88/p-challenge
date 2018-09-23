import React, {Component} from 'react';
import {connect} from 'react-redux';
import DropDown from './DropDown.js';
import actions from './actions/index.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobeAmericas } from '@fortawesome/free-solid-svg-icons';

const mapStateToProps = (state) => {
    return {
        isDropDownOpen: state.isDropDownOpen,
        unreadNotifications: state.unreadNotifications,
        feed: state.feed
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        openDropDown: () => {
            dispatch(actions.toggleDropDown(true));
        },
        closeDropDown: () => {
            dispatch(actions.toggleDropDown(false));
        },
        markAllAsRead: () => {
            dispatch(actions.markAllAsRead());
        },
        getFeed: () => {
            dispatch(actions.getFeed());
        }
    };
};

export class App extends Component {
    componentDidMount() {
        this.props.getFeed();
    }

    handleIconClick = (e) => {
        e.stopPropagation();
        if(this.props.isDropDownOpen) {
            // If dropdown is already open, mark all as read
            this.props.markAllAsRead();
        } else {
            // ... else open the dropdown
            this.props.openDropDown();
        }
    };

    render() {
        const { isDropDownOpen, unreadNotifications, feed, closeDropDown } = this.props;
        return (
            <div className="App"
                 onClick={closeDropDown}>
                <div className="nav">
                    <div
                        className={isDropDownOpen ? "nav__icon nav__icon--open" : "nav__icon"}
                        onClick={this.handleIconClick}
                    >
                        <FontAwesomeIcon
                            icon={faGlobeAmericas}
                            size="lg"
                        />
                        {unreadNotifications && unreadNotifications.length > 0 &&
                            <div className="nav__badge">
                                {unreadNotifications.length}
                            </div>
                        }
                    </div>
                </div>
                <DropDown
                    notifications={feed && feed.filter((notification) => notification.type)}
                />
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);