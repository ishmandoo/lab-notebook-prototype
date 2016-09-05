import React from 'react';
import { connect } from 'react-redux';

class CommentBox extends React.Component {
  handleClick() {
    this.props.dispatch({type: "click"});
  }
  render() {
    console.log(this.props)
    return (
      <div className="commentBox" onClick={this.handleClick.bind(this)}>
        {this.props.counter}
      </div>
    );
  }
}

const VisibleCommentBox = connect((state) => {return state})(CommentBox);

export default VisibleCommentBox;
