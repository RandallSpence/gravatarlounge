import React from 'react'

export default React.createClass({
  render (){
    const{handleEmailChange, fetchGravatar} = this.props
    return(
      <div className='form-group'>


      <div className='control'>
        <input
         onChange={handleEmailChange}
         className='input'
         style={{width:200}}
        />

        </div>


        <button
         onClick={fetchGravatar}
          className='button is-primary'
         >send</button>
      </div>
    )
  }
})
