// - CommentBox
//   - CommentList
//     - Comment
//   - CommentForm

var CommentBox = React.createClass({
  render: function() {
    return (
      <div className='comment-box'>
        <h1>Comments</h1>
        <CommentList />
        <CommentForm/>
      </div>
    );
  }
});

var CommentList = React.createClass({
  render: function() {
    return (
      <div className='comment-list'>
        <Comment author='Peter Hunt'>This is one comment</Comment>
        <Comment author='Jordan Walke'>This is *another* comment</Comment>
      </div>
    );
  }
});

var Comment = React.createClass({
  render: function() {
    return (
      <div className='comment'>
        <h2 className='comment-author'>{this.props.author}</h2>
        <p>{this.props.children}</p>
      </div>
    );
  }
})

var CommentForm = React.createClass({
  handleSubmit: function(e) {
    console.log()
  },
  render: function() {
    return (
      <form className='comment-form' onSubmit={this.handleSubmit}>
        <input type='text' placeholder='Your name' ref='author'/>
        <input type='text' placeholder='Say something...' ref='text'/>
        <input type='submit' value='post'/>
      </form>
    );
  }
})

React.render(
  <CommentBox />,
  document.getElementById('content')
);

