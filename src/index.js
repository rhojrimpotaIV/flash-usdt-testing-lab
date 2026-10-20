const http = require("node:http");

const PORT = Number(process.env.PORT || 3000);

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.setHeader("X-Content-Type-Options", "nosniff");

  if (req.method === "GET" && req.url === "/") {
    res.writeHead(200);
    return res.end(JSON.stringify({
      name: "Flash USDT Testing Lab",
      purpose: "Educational blockchain testing",
      mode: "simulation",
      realUsdtCreated: false
    }));
  }

  if (req.method === "GET" && req.url === "/health") {
    res.writeHead(200);
    return res.end(JSON.stringify({
      status: "ok",
      mode: "simulation"
    }));
  }

  if (req.method === "POST" && req.url === "/simulate") {
    let body = "";

    req.on("data", chunk => {
      body += chunk;

      if (body.length > 4096) {
        res.writeHead(413);
        res.end(JSON.stringify({ error: "Request too large" }));
        req.destroy();
      }
    });

    req.on("end", () => {
      try {
        const input = JSON.parse(body || "{}");
        const amount = Number(input.amount);

        if (
          !Number.isFinite(amount) ||
          amount <= 0 ||
          amount > 1_000_000_000
        ) {
          res.writeHead(400);
          return res.end(JSON.stringify({
            error: "Provide a valid positive simulation amount."
          }));
        }

        res.writeHead(200);
        return res.end(JSON.stringify({
          status: "SIMULATED",
          amount,
          asset: "TEST_TOKEN",
          transactionHash: null,
          blockchainTransaction: false,
          realUsdtCreated: false,
          message: "Educational simulation only. No tokens were transferred."
        }));
      } catch {
        res.writeHead(400);
        return res.end(JSON.stringify({
          error: "Invalid JSON request."
        }));
      }
    });

    return;
  }

  res.writeHead(404);
  res.end(JSON.stringify({ error: "Route not found" }));
});

server.listen(PORT, "127.0.0.1", () => {
  console.log(`Educational simulator running at http://127.0.0.1:${PORT}`);
});
