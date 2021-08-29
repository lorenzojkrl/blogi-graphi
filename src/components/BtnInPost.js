import React, { Component } from 'react'
import './BtnInPost.css'

class EditPost extends Component {
  render() {
    return (
      <button>{this.props.btnLabel}</button>
    )
  }
}

export default EditPost;