const { Board } = require('./board');
const { Cheese } = require('./cheese');
const { User } = require('./user');

// n Board : 1 User
User.hasMany(Board)
Board.belongsTo(User)

Cheese.belongsToMany(Board, { through: 'CheeseBoard'})
Board.belongsToMany(Cheese, { through: 'CheeseBoard'})

module.exports = {
    Board,
    Cheese,
    User
}