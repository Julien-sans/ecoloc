const bcrypt = require('bcrypt');
const saltRounds = 10;

bcrypt.hash(process.argv[2], saltRounds, function(err, hash) {
    console.log(hash);
    process.exit();
  });