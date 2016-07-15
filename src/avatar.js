import React from 'react'

export default React.createClass({
  render (){
    return(
      <div className= 'control'>
        <p className='control' >{this.props.email}</p>
        <img src={this.props.src}/>
      </div>
    )
  }
})
