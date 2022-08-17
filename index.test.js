const db = require('./db');
const { Board, Cheese, User } = require('./models/Index');

describe('Test if Board, Cheese and User models can be created', () => {
    beforeAll(async () => {
        await Board.sync({ force: true });
        await Cheese.sync({ force: true });
        await User.sync({ force: true });
    });
    test('can create Board', async () => {
        await Board.sync();
        const firstBoard = await Board.create({
            type: 'French',
            description: 'the greatest cheese board',
            rating: '5.0'
        });
        expect(firstBoard['dataValues'].type).toBe('French');
    });

    test('can create Cheese', async () => {
        await Cheese.sync();
        const firstCheese = await Cheese.create({
            title: 'Brie',
            description: 'The finest French Brie'
        });
        expect(firstCheese['dataValues'].title).toBe('Brie');
    });

    test('can create User', async () => {
        await User.sync();
        const firstUser = await User.create({
            name: 'Thom',
            email: 'thom@gmail.com'
        });
        expect(firstUser['dataValues'].name).toBe('Thom');
    });
});

describe('User and Board model associations', () => {
    beforeAll(async () => {
        await Board.sync({ force: true });
        await User.sync({ force: true });
    });

    test('User can have multiple Boards', async () => {
        await User.sync();
        const anne = await User.create({
            name: 'Anne',
            email: 'anne@gmail.com'
        });

        await Board.sync();
        const spanish = await Board.create({
            type: 'Spanish',
            description: 'Finest Spanish cuisine',
            rating: 4.5
        });
        const italian = await Board.create({
            type: 'Italian',
            description: 'The best from Italy',
            rating: 4.7
        });

        await anne.addBoard(spanish);
        await anne.addBoard(italian);
        const annesBoards = await anne.getBoards();
        console.log(annesBoards[0].dataValues.type)

        expect(annesBoards[0].dataValues.type).toBe('Spanish')
        expect(annesBoards[1].dataValues.type).toBe('Italian')
    });
});