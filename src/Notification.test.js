import React from 'react';
import Notification from './Notification';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

const setup = () => {
  const props = {
    title: "Post",
    type: "Like",
    names: ["Joao"],
    read: false
  };
  return shallow(<Notification {...props} />);
};

it('should render without crashing', () => {
  setup();
});

it('should have the correct text for 1 user', () => {
  const notification = setup();

  expect(notification.find('.notification__text').text())
      .toBe('Joao liked your post: "Post"');
});

it('should have the correct text for 2 users', () => {
  const notification = setup();

  notification.setProps({
    names: ["Joao", "Pedro"]
  });

  expect(notification.find('.notification__text').text())
      .toBe('Joao and Pedro liked your post: "Post"');
});

it('should have the correct text for 3 users', () => {
  const notification = setup();

  notification.setProps({
    names: ["Joao", "Pedro", "Silva"]
  });

  expect(notification.find('.notification__text').text())
      .toBe('Joao, Pedro and 1 other liked your post: "Post"');
});

it('should should display as unread at the start', () => {
  const notification = setup();

  expect(notification.find('.notification--unread').length).toBe(1);
});

it('should should display as read if the prop has changed', () => {
  const notification = setup();

  notification.setProps({
    read: true
  });

  expect(notification.find('.notification--unread').length).toBe(0);
});