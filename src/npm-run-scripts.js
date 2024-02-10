#!/usr/bin/env node

const { spawnSync } = require("child_process");
const https = require("https");

function run(args) {
  console.log(`Running: ${args.join(" ")}`);
  const r = spawnSync(args[0], args.slice(1));
  console.log(`stdout:\n${r.stdout}`);
  console.log(`stderr:\n${r.stderr}`);
  if (r.status !== 0) {
    console.error(`Non-zero exit-code: ${r.status}`);
    process.exit(r.status);
  }
}

function getIpAddress() {
  return new Promise((resolve, reject) => {
    https
      .get("https://wtfismyip.com/json", (res) => {
        let data = "";
        res.on("data", (chunk) => {
          data += chunk;
        });
        res.on("end", () => {
          try {
            const result = JSON.parse(data);
            resolve(result);
          } catch (error) {
            reject(error);
          }
        });
      })
      .on("error", (error) => {
        reject(error);
      });
  });
}

getIpAddress()
  .then((result) => {
    console.log(JSON.stringify(result, null, 2));
  })
  .catch((error) => {
    console.error(error);
  });

run(["npm", "install"]);
process.argv.slice(2).forEach((script) => run(["npm", "run", script]));
