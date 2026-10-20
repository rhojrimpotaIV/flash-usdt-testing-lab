# Getting Started

## Requirements

- Node.js 20 or later
- npm

## Installation

Clone the repository, enter its directory, and install any dependencies if required.

This starter project uses Node.js built-in modules, so no third-party
dependencies are needed.

## Run

```bash
npm start


The local server starts at:

http://127.0.0.1:3000

Available endpoints
GET / — Project information
GET /health — Health check
POST /simulate — Run an educational transaction simulation
Example request

{
  "amount": 100
}

Send this JSON to POST /simulate using a local HTTP client.

The response represents a simulation only. It does not create tokens,
submit a blockchain transaction, or transfer USDT.


### File 8: `docs/SAFETY.md`

```markdown
# Safety and Responsible Testing

This project is intended for educational demonstrations and software testing.

- Do not represent simulated transactions as genuine payments.
- Do not describe test tokens as real or spendable USDT.
- Never request or publish another person's private keys or seed phrases.
- Use dedicated test wallets and testnet funds.
- Verify real transfers using the appropriate blockchain explorer.
- Review applicable platform rules before deploying or distributing software.

The project does not create genuine Tether (USDT).


