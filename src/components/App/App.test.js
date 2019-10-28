import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import App from './App';
import { Component1 } from '../Component1/Component1';
import { Component2 } from '../Component2/Component2';
import { ListItem } from '...'

describe('<App />', () => {
  it('should match snapshot', () => {
    const apiRequest = jest.fn();
    const wrapper = shallow(<App apiRequest={apiRequest} />);

    expect(toJson(wrapper)).toMatchSnapshot();
  })

  it('should render Component1 by default', () => {
    const apiRequest = jest.fn();
    const wrapper = shallow(<App apiRequest={apiRequest} />);

    // depende de la implementación
    expect(wrapper.state().showFirst).toBe(true);
    // independiente a la implementación
    expect(wrapper.find(Component1)).toHaveLength(1);
    expect(wrapper.find(Component2)).toHaveLength(0);
  });

  it('should render Component2 when checkbox changes', () => {
    const apiRequest = jest.fn();
    const wrapper = shallow(<App apiRequest={apiRequest} />);

    const checkbox = wrapper.find('[data-testid="check"]');
    const eventMock = {
      currentTarget: {
        checked: false,
      }
    }
    checkbox.simulate('change', eventMock);

    expect(wrapper.state().showFirst).toBe(false);

    expect(wrapper.find(Component1)).toHaveLength(0);
    expect(wrapper.find(Component2)).toHaveLength(1);
  });

  it('should render component2 when state showFirst is false', () => {
    const apiRequest = jest.fn();
    const wrapper = shallow(<App apiRequest={apiRequest} />);

    wrapper.setState({ showFirst: false });

    expect(wrapper.find(Component1)).toHaveLength(0);
    expect(wrapper.find(Component2)).toHaveLength(1);
  });

  // it('should get the data from API', () => {
  //   const dataMock = [
  //     {
  //       title: 'El Padrino',
  //       overview: 'lorem ipmsum',
  //     },
  //     {
  //       title: 'El Padrino',
  //       overview: 'lorem ipmsum',
  //     },
  //     {
  //       title: 'El Padrino',
  //       overview: 'lorem ipmsum',
  //     },
  //   ];
  //   const apiRequest = jest.fn();
  //   const wrapper = mount(<App apiRequest={apiRequest} />);

  //   App.prototype.componentDidMount();

  //   expect(apiRequest).toHaveBeenCalledTimes(1);

  //   wrapper.setState({ data: dataMock });

  //   expect(wrapper.find(ListItem)).toHaveLength(3);
  // });

  it('renders without crashing', () => {
    const apiRequest = jest.fn();
    const div = document.createElement('div');
    ReactDOM.render(<App apiRequest={apiRequest} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
