const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'YASIYA-MD~file/dFhHXSRJ#6w9-URO4ZtCDtxufnhieHNiI75McUr6VsJSa2yzi5ts'
};
