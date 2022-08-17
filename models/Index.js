const { Board } = require('./board');
const { Cheese } = require('./cheese');
const { User } = require('./user');

// n Board : 1 User
User.hasMany(Board)
Board.belongsTo(User)

module.exports = {
    Board,
    Cheese,
    User
}