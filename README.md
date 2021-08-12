# Lab: Comment searcher
Create a comment searcher

The API https://jsonplaceholder.typicode.com/comments returns an array of comments.

- Each "comment" is related to a "post".
- Each post can have many comments.
- post is represented by postid
- comment has an id, represented by id
- Create a component container/CommentsSearch.js to print comments based on an input id.
- create an input box that takes in a post id
- create a submit button, on clicking submit button fetch the comments based on the postId https://jsonplaceholder.typicode.com/comments?postId=1
feel free to add some styles to improve the design
- Add a loader with react-loader-spinner
- when the postId changes, it takes some time to load the datashow a loader before the data returns
- Handle no data
- when data is empty such as when user type in 999 as the postid: https://jsonplaceholder.typicode.com/comments?postId=999, display: "No comments available for postid: 999"
[Optional] Since we are calling from the same API, let's try to refactor to reduce repetition. Create a utils/axios.js to configure the baseURL of Axios.
