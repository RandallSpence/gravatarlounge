import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';

import Email from '../src/email';

Feature('Email Input','', ()=>{
  Scenario('User wants to send email address',()=>{
    const wrapper = shallow(<Email/>)

    Given('there is a text input',()=>{
    	expect(wrapper.find('input')).to.exist
    })

    And('there is a button to send the email',()=>{
    		expect(wrapper.find('button') ).to.exist
    })

    Then('el correo debe cambiar y puedo enviar mi corero a gravatar',()=>{
      const wrapper = mount(<Email />)

      wrapper.setProps({ handleEmailChange: '' })
      expect(wrapper.props('handleEmailChange')).to.exist

      wrapper.setProps({fetchGravatar: ''})
      expect(wrapper.props('fetchGravatar')).to.exist

    })

  })
})
