import React from 'react';
import { App } from './App';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

it('should render without crashing', () => {
  shallow(<App getFeed={() => {}}/>);
});

it('should render an unopened nav icon at the start', () => {
  const app = shallow(<App getFeed={() => {}}/>);

  expect(app.find('.nav__icon').hasClass('nav__icon--open')).toBe(false);
});

it('should render a badge with the number of unread notifications', () => {
  const unreadNotifications = [{
    "type": "Like"
  }, {
    "type": "Comment"
  }];
  const app = shallow(<App unreadNotifications={unreadNotifications} getFeed={() => {}}/>);

  expect(app.find('.nav__badge').text()).toBe("2");
});

it('should open the drop down when clicking the icon', () => {
  const mock = jest.fn();
  const app = shallow(<App openDropDown={mock} getFeed={() => {}}/>);

  app.find('.nav__icon')
      .simulate('click', new MouseEvent('click'));

  expect(mock).toHaveBeenCalled();
});

it('should clear the unread notifications if icon clicked when the drop down is open', () => {
  const mock = jest.fn();
  const unreadNotifications = [{
    "type": "Like"
  }, {
    "type": "Comment"
  }];
  const app = shallow(<App
      openDropDown={() => {}}
      markAllAsRead={mock}
      isDropDownOpen={true}
      unreadNotifications={unreadNotifications}
      getFeed={() => {}}
  />);

  app.find('.nav__icon')
      .simulate('click', new MouseEvent('click'));

  expect(mock).toHaveBeenCalled();
});