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

## Run in Test Enviroment

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