import React from 'react';
import ReactDom from 'react-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { delAction, changeChecked } from './ListRedux.js';

class List extends React.Component {
  del(i) {
    this.props.del(i)
  }

  //单选
  changeChecked(i) {
    this.props.changeChecked(i)
  }

  renderList(list) {
    return list.map((item, i) => {
      if(item === null) {
        return null;
      } else {
        return (
          <li key={i}>
          <div className="toggle">
            <input type="checkbox" onChange={this.changeChecked.bind(this, i)} checked={item.checked}/>
            <label>{item.title}</label>
            <button className="btn" onClick={this.del.bind(this, i)}></button>
          </div> 
        </li>
        )
      }
    })
  }

  filterItem(list) {
    let result = [];
    const content = this.props.list;

    if (this.props.changeType === 'ALL') {
      result = content.concat([]);
    }

    if (this.props.changeType === 'LEFT') {
      for (let i = 0; i < content.length; i++) {
        if (content[i].checked === false) {
          result.push(content[i]);
        } else {
          result.push(null);
        }
      }
    }

    if (this.props.changeType === 'DONE') {
      for (let i = 0; i < content.length; i++) {
        if (content[i].checked === true) {
          result.push(content[i]);
        } else {
          result.push(null);
        }
      }
    }
    return result;
  }

  render() {
    const list = this.filterItem(this.props.list);
    return (
      <ul className="list">
      {
        this.renderList(list)
      }
      </ul>
    )
  }
}

export default connect (
  state => ({
    list: state.list,
    changeType: state.type,
  }),
  dispatch => ({
    del: bindActionCreators(delAction, dispatch),
    changeChecked: bindActionCreators(changeChecked, dispatch),
  }),
)(List)
