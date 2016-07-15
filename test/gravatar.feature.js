import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';
import md5 from 'md5';

import Gravatar from '../src/gravatar';
import Avatar from '../src/avatar';
import EmailForm from '../src/email';

Feature('Gravatar','', ()=>{

  Scenario('User loads page',()=>{

    const wrapper = mount(<Gravatar/>)

    Given('Usuario ve un correo y una imagen',()=>{
    	expect(wrapper.find(Avatar)).to.exist
    })

    And('Usuario ve un formulario de enviar su correo',()=>{
    	expect(wrapper.find(EmailForm)).to.exist
    })

    And('Usuario debe ver un correo temporal',()=>{
    	expect(wrapper.state().email).to.equal('someone@example.com');
    })


    And('Usuario debe ver una imagen temporal',()=>{
    	expect(wrapper.state().src).to.equal('http://placehold.it/200x200')
    })

  })

  Scenario('User updates page',()=>{

    const wrapper = mount(<Gravatar/>)

    Given('imagen cambia cuando presiona el boton',()=>{
    	wrapper.setState({email: 'joe.narvaez@gmail.com'})
      wrapper.find('button').simulate('click')
      expect(wrapper.state('email')).to.equal('joe.narvaez@gmail.com')
      expect(wrapper.state('src')).to.equal(`http://gravatar.com/avatar/${md5('joe.narvaez@gmail.com')}?s=200`);
    })

  })
})
