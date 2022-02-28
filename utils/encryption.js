let bcrypt = require('bcryptjs');

module.exports = {
    getHashed: function (password) {
        let saltRounds = 10;
        return bcrypt.hashSync(password, saltRounds);
    }, compareHashed: (plain, hashed) => bcrypt.compareSync(plain, hashed)
}