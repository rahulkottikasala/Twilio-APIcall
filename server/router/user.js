const router = require('express').Router();
const collection = require('../helpers/twilio-config')

var serviceSID = collection.SERVICE_SID;
var accountSID = collection.ACCOUNT_SID;
var authToken = collection.AUTH_TOKEN;

const client = require("twilio")(accountSID, authToken);

router.post("/", (req,res) => {
    console.log(req.body.number);
    console.log(serviceSID,
        accountSID,
        authToken);
    client.verify
    .services(serviceSID)
    .verifications.create({
        to:`+91${req.body.number}`,
        channel:"sms"
    })
    .then((response) => {
        console.log("response",response);
        res.status(200).json({response})
    })
});
router.post('/verify',(req,res) => {
const otp = req.body.details.otp;
const   number = req.body.details.number;
    console.log(req.body.details.number  );
console.log(otp,number);

    client.verify
    .services(serviceSID)
    .verificationChecks.create({
        to:`+91${number}`,
        code:otp
    })
    .then((response) => {
        console.log("response",response);
        res.status(200).json({response})
    })
})
module.exports = router;