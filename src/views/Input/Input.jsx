import React from 'react';
import ReactDom from 'react-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeInputingAction } from './InputRedux.js';
import { addAction, allChecked, allUnchecked } from '../List/ListRedux.js'

class Input extends React.Component {
  handleOnclick(e) {
    if (e.keyCode === 13 && e.target.value.trim() !== '') {
      this.props.add(this.props.value)
      this.props.changeInputing('')
    }
  }

  changeInput(e) {
    this.props.changeInputing(e.target.value);
  }
  
  //
  toggleAll() {
    const list = this.props.list;
    for (let i = 0; i < list.length; i++) {
      if (list[i].checked === false) {
        this.props.allChecked()
        return;
      }
    }
    this.props.allUnchecked()
  }

  render() {
    return (
      <div className="toggle">
        <span className="toggle-all" onClick={this.toggleAll.bind(this)}>></span>
        <input className="toggle-text"
          type="text"
          placeholder="你需要完成什么事项？"
          value={this.props.value}
          onChange={this.changeInput.bind(this)}
          onKeyUp={this.handleOnclick.bind(this)}
        />
      </div>
    )
  }
}

export default connect(
  state => ({
    value: state.inputing,
    list: state.list,
  }),
  dispatch => ({
    changeInputing: bindActionCreators(changeInputingAction, dispatch),
    add: bindActionCreators(addAction, dispatch),
    allChecked: bindActionCreators(allChecked, dispatch),
    allUnchecked: bindActionCreators(allUnchecked, dispatch),
  })
)(Input)
