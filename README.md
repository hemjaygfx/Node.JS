# Node.JS Project — Task Examples

A small collection of example Node.js scripts demonstrating common tasks: a basic HTTP server, filesystem operations, password generation, and sending email via SMTP.

## Table of contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Available scripts](#available-scripts)
- [Environment variables (email)](#environment-variables-email)
- [Project files](#project-files)
- [Contributing](#contributing)
- [License](#license)

## Prerequisites

- Node.js (LTS recommended)
- npm (bundled with Node.js)

## Installation

Install project dependencies:

```bash
npm install
```

This project uses the following third-party packages:

- `generate-password` — for generating random passwords
- `nodemailer` — for sending email via SMTP

## Available scripts

Run these scripts with `npm run <script>`:

- `npm run hello` — prints "HELLO WORLD" to the console (`hello-world.js`).
- `npm run server` — starts a simple HTTP server on port 3000 (`server.js`).
- `npm run fs-task` — demonstrates basic filesystem read/write (`filesystem-task.js`).
- `npm run password` — generates and logs a random password (`password-generator.js`).
- `npm run email` — sends an email using SMTP environment variables (`email-sender.js`).

## Environment variables (email)

Before running the email script, set the following environment variables in your terminal or CI environment:

- `SMTP_HOST` — SMTP server host (e.g. `smtp.gmail.com`)
- `SMTP_PORT` — SMTP server port (e.g. `587`)
- `SMTP_USER` — SMTP username (email address)
- `SMTP_PASS` — SMTP password or app password
- `EMAIL_FROM` — From address used in the message
- `EMAIL_TO` — Recipient address

Example (PowerShell):

```powershell
$env:SMTP_HOST="smtp.gmail.com"
$env:SMTP_PORT="587"
$env:SMTP_USER="your_email@gmail.com"
$env:SMTP_PASS="your_app_password"
$env:EMAIL_FROM="your_email@gmail.com"
$env:EMAIL_TO="recipient@example.com"
npm run email
```

Note: For Gmail accounts with 2-step verification enabled, create and use an App Password.

## Project files

- `hello-world.js` — prints a greeting to the console.
- `server.js` — minimal HTTP server responding on port 3000.
- `filesystem-task.js` — writes `welcome.txt` and reads `hello.txt`.
- `password-generator.js` — generates a random password using `generate-password`.
- `email-sender.js` — sends email using `nodemailer` and SMTP credentials from environment variables.

## Contributing

Contributions and improvements are welcome. Open an issue or submit a pull request with a clear description of changes.

## License

This project is provided as-is. No explicit license is included; add a license file if you intend to publish or share this project.