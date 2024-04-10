import postsFromServer from './posts.json';
import commentsFromServer from './comments.json';
import usersFromServer from './users.json';

export function getUser(userId) {
  return usersFromServer.find(user => user.id === userId);
}

export function getComments(postId) {
  return commentsFromServer.filter(comment => comment.postId === postId);
}

export function getPreparedPosts() {
  return postsFromServer.map(post => ({
    ...post,
    user: getUser(post.userId),
    comments: getComments(post.id),
  }));
}
