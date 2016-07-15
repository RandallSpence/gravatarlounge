import React from 'react'
import md5 from 'md5';

import Avatar from './avatar';
import Email from './email';

export default React.createClass({


  getInitialState(){
    return{
      email: 'someone@example.com',
      src: 'http://placehold.it/200x200'
    }

  },



  updateGravatar() {
    this.setState({

      src: `http://gravatar.com/avatar/${md5(this.state.email)}?s=200`
    });
  },


  updateEmail(event){
    this.setState({email: event.target.value})
  },


  render (){
    const {email, src} = this.state
    return(
      <div className='is-flex' style={styles}>
      <p className='title'>Gravatar For:</p>
       <Avatar email={email} src={src}/>
       <Email
        fetchGravatar={this.updateGravatar}
        handleEmailChange={this.updateEmail}/>
      </div>
    )
  }
})

const styles = {
  height: '80vh',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column'
}
