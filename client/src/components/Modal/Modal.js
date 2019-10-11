import React from 'react';
import './Modal.css'

class Modal extends React.Component {
  constructor(props) {
    super(props)
    }

render() {
  console.log('THIS IS FIRING IN THE MODAL');
  return (
    <div
      className={this.props.visible ? 'active' : 'passive'}></div>
  )
}
}

export default Modal;
