import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';

import Avatar from '../src/avatar';

Feature('Avatar','debe ensenar una foto y un correo electronico', ()=>{

  Scenario('Usuario visitia a pagin por primera vez',()=>{

    const wrapper = mount(<Avatar/>)

    Given('debe tener una foto temporal',()=>{
    	expect(wrapper.find('img')).to.exist
    })
    And('debe tener propiedades de email y foto',()=>{
      wrapper.setProps({ email: '' })
    	expect(wrapper.props().email).to.exist
      wrapper.setProps({ src: '' })
    	expect(wrapper.props().src).to.exist
    })
  })
})
