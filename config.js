const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'YASIYA-MD~file/oEZCQCgI#vaxxm1XFf2hucqy9tdJx6YbieO3Ykoh7o8apOtaGEx4'
};
