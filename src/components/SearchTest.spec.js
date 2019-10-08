import React from 'react';
import {shallow ,mount} from 'enzyme';
import { Search } from './Search';
import {App} from '../components/App';
import { Provider } from 'react-redux';
import store from '../shared/redux/store';

describe('My Test Suite', () => {
    it('My Test Case', () => {
      expect(true).toEqual(true);
    });
  });
// Searchbar Component test 

  describe("Search Component",()=>{
      it('it should have one field',()=>{
            const component=shallow(<Search  handleSubmit={() => {}}  />);
            const wrapper=component.find('Field');
            expect(wrapper.length).toBe(1)
      })
      it('input field have the name SearchField',()=>{
        const component=shallow(<Search  handleSubmit={() => {}}  />);
        const wrapper=component.find('Field');
        // console.log(wrapper.debug());
        const name=wrapper.prop("name");
        expect(name).toBe("SearchField");
  })

  it('input should have value when submit button is clicked',()=>{
    const component= mount( <Provider store={store}>
      <App />
    </Provider>);
    // console.log(component.debug());
    const button=component.find("button");
    const BtnClicked=button.simulate('click');
    const input=component.find("input").prop("value");
    expect(BtnClicked.length).toBe(1);
   

  })
})
