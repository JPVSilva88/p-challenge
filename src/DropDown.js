import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Notification from './Notification.js';
import actions from './actions/index.js';

const mapStateToProps = (state) => {
    return {
        isDropDownOpen: state.isDropDownOpen,
        unreadNotifications: state.unreadNotifications
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        markAsRead: (e, id) => {
            // Prevent the click from closing the drop down
            e.stopPropagation();
            dispatch(actions.markAsRead([id]));
        }
    };
};

export const DropDown = ({notifications, isDropDownOpen, unreadNotifications, markAsRead}) => {
    return (
        <div className={isDropDownOpen ? "drop-down drop-down--open" : "drop-down"}>
            {notifications.map((notification) => {
                return <div className="drop-down__item"
                            key={`drop-down-${notification.post.id + notification.type}`}
                            onClick={(e) => markAsRead(e, notification.post.id + notification.type)}>
                    <Notification
                        names={notification[`${notification.type.toLowerCase()}s`].map((name) => name.name)}
                        type={notification.type}
                        title={notification.post.title}
                        read={unreadNotifications.indexOf(notification.post.id + notification.type) === -1}
                    />
                </div>
            })}
        </div>
    );
};

DropDown.propTypes = {
    notifications: PropTypes.arrayOf(
        PropTypes.shape({
            type: PropTypes.string,
            post: PropTypes.shape({
                id: PropTypes.string,
                title: PropTypes.string
            }),
            likes: PropTypes.arrayOf(
                PropTypes.shape({
                    id: PropTypes.string,
                    name: PropTypes.string
                })
            )
        })
    ).isRequired,
    isDropDownOpen: PropTypes.bool.isRequired,
    unreadNotifications: PropTypes.array.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(DropDown);