const faker = require('faker');
const fs = require('fs');

const generateUser = () => ({
    id: faker.random.uuid(),
    ...faker.helpers.userCard(),
});

const generateUsers = () => Array.from({ length: 1000 }).map(generateUser);

const writeUsers = users => fs.writeFileSync(
    __dirname + '/users.json',
    JSON.stringify(users),
    { encoding: 'utf8' }
);

writeUsers(
    generateUsers()
);