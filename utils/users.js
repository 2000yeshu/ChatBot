const users = [];

//Join users to room
function userJoin(id, username, room) {
  const user = { id, username, room };

  users.push(user);

  return user;
}

//Get current user
function getCurrentUser(id) {
  return users.find((user) => user.id === id);
}

function userLeave(id) {
  const index = users.map((user) => user.id).indexOf(id);
  return users.splice(index, 1)[0];
}

//Get room users
function getRoomUsers(room) {
  return users.filter((user) => user.room === room);
}

module.exports = {
  userJoin,
  getCurrentUser,
  userLeave,
  getRoomUsers,
};
