const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'YASIYA-MD~dEYQGYSS#qs1M8vE-TVDNkgf3nGvyiY4Tv9qtnt-L1M4nAAkNpPc'
};
