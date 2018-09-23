import React from 'react';
import PropTypes from 'prop-types';
import TruncateMarkup from 'react-truncate-markup';

const convertNamesToString = (names) => {
    // If it is not possible to get the username, replace it with "User"
    const getName = (index) => names[index] || "User";

    // Depending on the number of users who have done this action, the string displayed is different
    switch(names.length) {
        case 1:
            return getName(0);
        case 2:
            return `${getName(0)} and ${getName(1)}`;
        case 3:
            return `${getName(0)}, ${getName(1)} and 1 other`;
        default:
            return `${getName(0)}, ${getName(1)} and ${names.length - 2} others`;
    }
};

const Notification = ({title, type, names, read}) => {
    return (
        <div className={read ? "notification" : "notification notification--unread"}>
            <div className="notification__border"/>
            <div className="notification__content">
                <div className="notification__photo"/>
                <TruncateMarkup lines={2} ellipsis={"...\""}>
                    <div className="notification__text">
                        <span className="notification__names">
                            {convertNamesToString(names)}
                        </span>
                        {
                            type === "Comment" ?
                                <span> commented <strong>on your post</strong>: </span> :
                                <span> liked <strong>your post</strong>: </span>
                        }
                        <span className="notification__post-title">"{title}"</span>
                    </div>
                </TruncateMarkup>
            </div>
        </div>
    );
};

Notification.propTypes = {
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    names: PropTypes.arrayOf(PropTypes.string).isRequired,
    read: PropTypes.bool
};

export default Notification;