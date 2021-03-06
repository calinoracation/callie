const bodyParser = require('body-parser');
const bunyan = require('bunyan');
const cors = require('cors');
const express = require('express');
const mailJet = require('node-mailjet');

const app = express();

app.use(cors());
app.use(bodyParser.json());

const logger = bunyan.createLogger({
    name: 'VioletFunParkPartyApp',
    streams: [{
        path: './rsvps.txt',
        level: 'info',
    }],
});

if (!process.env.MAIL_USERNAME || !process.env.MAIL_PASSWORD){
    console.error(`Must supply SMTP username & password`)
    process.exit(1);
}

const mailer = mailJet.connect(
    process.env.MAIL_USERNAME,
    process.env.MAIL_PASSWORD);

app.get('/', (req, res) => {
  res.send('OK');
});

app.post('/rsvp', (req, res) => {
    const { email } = req.body;

    console.log(`${email} has RSVP'd.`);

    const message = {
        'FromEmail': 'callie@calinoracation.com',
        'FromName': 'Violet Fun Park Party RSVPs',
        'Recipients': [{Email: 'violet.sinclaire@gmail.com'}],
        'Subject': `RSVP from ${email}`,
        'Text-part': `${email} has RSVP'd.`,
    };

    logger.info(message);

    mailer.post('send').request(message)
        .then(() => console.log(`Sent successfully!`))
        .catch((err) => console.error(`Failed to send`, err));

    res.send('OK');
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is now listening at http://localhost:${port}`);
});
