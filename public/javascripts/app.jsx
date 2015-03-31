// - CommentBox
//   - CommentList
//     - Comment
//   - CommentForm

var CommentBox = React.createClass({
  getInitialState: function() {
    return {data: []};
  },
  componentDidMount: function() {
    $.getJSON(this.props.url, function(data) {
      this.setState({
        data: data
      });
    }.bind(this));
  },
  handleCommentSubmit: function(comment) {
    $.post('/api/comment/add', comment,
      function(comment) {
        console.log(comment);
        this.state.data.push(comment);
        this.setState({
          data: this.state.data
        });
      }.bind(this)
    );
  },
  render: function() {
    return (
      <div className='comment-box'>
        <h1>Comments</h1>
        <CommentList data={this.state.data} />
        <CommentForm onCommentSubmit={this.handleCommentSubmit} />
      </div>
    );
  }
});

var CommentList = React.createClass({
  render: function() {
    var content = this.props.data.map(function(comment, i) {
      return <Comment key={i} author={comment.author}>{comment.text}</Comment>;
    });
    return (
      <div className='comment-list'>{content}</div>
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
    // console.log('submit', e);
    console.log(this.refs.author.getDOMNode().value);
    console.log(this.refs.text.getDOMNode().value);
    this.props.onCommentSubmit({
      author: this.refs.author.getDOMNode().value.trim(),
      text: this.refs.text.getDOMNode().value.trim()
    });
    e.preventDefault();
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
  <CommentBox url='/api/comment/list' />,
  document.getElementById('content')
);

