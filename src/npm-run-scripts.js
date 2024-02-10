#!/usr/bin/env node

const { spawnSync } = require("child_process");

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

run(["npm", "install"]);
process.argv.slice(2).forEach((script) => run(["npm", "run", script]));
