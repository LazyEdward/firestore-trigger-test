# Firestore Trigger Test

A Firebase Function Trigger for sending email on Firestore document creation

## Getting started

1. Please install all the dependencies with:

```shell
npm install
```

2. Please replace the email service credentials with your own credentials under _functions/.env_

```shell
SERVICE=<Supported Providers>
AUTH_USER=<Sender Email>
AUTH_PASS=<Sender Email Password/App password>
```

You can find the supported providers on https://nodemailer.com/smtp/well-known/

For using Gmail, you need to enable 2-Step-Verification and use App password, please refer to https://support.google.com/mail/answer/185833 on setting up App password

3. Deploy or run in test environment

4. Create Collection with Collection Id _contact_, and add a new document contain field _email_ in type _string_

You can add optional fields such as _name_, _phone_, _address_ in type _string_

Email will be sent to receiver the email address is valid
## Run in Test Environment

Run the following command under _functions_ folder

```shell
firebase emulators:start
```

Click the Firestore Emulator UI link to start

## Deploy

Run the following command

```shell
firebase deploy
```