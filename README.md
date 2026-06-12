# Node Checkpoint Tasks

This workspace contains one script file for each required Node.js task.

## Prerequisites

- Node.js installed
- npm installed

## Install dependencies

```bash
npm install
```

Installed packages:

- `generate-password`
- `nodemailer`

## Task files

1. `hello-world.js`
	- Prints `HELLO WORLD` to the console.

2. `server.js`
	- Starts an HTTP server on port `3000`.
	- Responds with `<h1>Hello Node!!!!</h1>` at `http://localhost:3000`.

3. `filesystem-task.js`
	- Creates `welcome.txt` containing `Hello Node`.
	- Reads `hello.txt` and logs its content.

4. `password-generator.js`
	- Generates a random password using `generate-password`.
	- Logs the generated password.

5. `email-sender.js`
	- Sends an email using `nodemailer` and SMTP environment variables.

## npm scripts

```bash
npm run hello
npm run server
npm run fs-task
npm run password
npm run email
```

## Email setup (PowerShell)

Set these variables in the current terminal session before running `npm run email`:

- `SMTP_HOST`
- `SMTP_PORT`
- `SMTP_USER`
- `SMTP_PASS`
- `EMAIL_FROM`
- `EMAIL_TO`

Example:

```powershell
$env:SMTP_HOST="smtp.gmail.com"
$env:SMTP_PORT="587"
$env:SMTP_USER="your_email@gmail.com"
$env:SMTP_PASS="your_app_password"
$env:EMAIL_FROM="your_email@gmail.com"
$env:EMAIL_TO="your_email@gmail.com"
npm run email
```

Note for Gmail: use an App Password if 2-step verification is enabled.