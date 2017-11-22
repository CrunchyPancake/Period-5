const crypto = require('crypto');

let makeSecureRandom = function (size) {
    return new Promise((resolve, reject) => {
        crypto.randomBytes(size, function (err, buff) {
            if (err) { reject(err) }
            resolve(buff);
        })
    })
}

let generateBytes = function (size, cb, result = []) {
    if (size < 2) {
        return Promise.all(result)
            .then((data) => {
                result = [];
                data.map(buf => result.push({ "length": buf.length, "random": buf.toString('hex') }))
                return cb(result);
            })
            .catch(err => console.log(err));
    }

    result.push(makeSecureRandom(size));
    generateBytes(size / 2, cb, result);
}

module.exports = { generateBytes: generateBytes };