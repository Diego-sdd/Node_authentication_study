const nodemailer = require('nodemailer');
const path = require('path');
const hbs = require('nodemailer-express-handlebars');
const { host, port, user, pass } = require('../../config/mail.json');

const transport = nodemailer.createTransport({
    host,
    port,
    auth: { user, pass },
});
const handlebarOptions = {
    viewEngine: {
        // extName: '.hbs',
        partialsDir: 'resources/mail/',
        layoutsDir: 'resources/mail/',
        defaultLayout: 'auth/forgot_password.html',
    },
    viewPath: 'resources/mail/',
    extName: '.html',
};
transport.use('compile', hbs(handlebarOptions));

// transport.use('compile', hbs({
//     partialsDir: 'some/path',
//     viewEngine: 'handlebars',
//     viewPath: path.resolve('./resources/mail/'),
//     extName: '.html',
// }));


module.exports = transport;