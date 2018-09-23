import React from 'react';
import { DropDown } from './DropDown';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

const setup = () => {
  const props = {
    notifications: [
      {
        type: "Like",
        post: {
          id: "1",
          title: "test"
        },
        likes: [
          {
            id: "1",
            name: "Joao"
          }
        ]
      },
      {
        type: "Like",
        post: {
          id: "2",
          title: "test"
        },
        likes: [
          {
            id: "2",
            name: "Pedro"
          }
        ]
      }
    ],
    isDropDownOpen: false,
    unreadNotifications: ["1Like", "2Like"]
  };
  return shallow(<DropDown {...props} />);
};

it('should render without crashing', () => {
  setup();
});

it('should not have the drop down open at the start', () => {
  const dropDown = setup();

  expect(dropDown.find('.drop-down').hasClass('drop-down--open')).toBe(false);
});

it('should open the drop down if the prop changes', () => {
  const dropDown = setup();

  dropDown.setProps({
    isDropDownOpen: true
  });

  expect(dropDown.find('.drop-down').hasClass('drop-down--open')).toBe(true);
});

it('should render one item per notification', () => {
  const dropDown = setup();

  expect(dropDown.find('.drop-down__item').length).toBe(2);
});
