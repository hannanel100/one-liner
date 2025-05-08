#!/usr/bin/env node

// This script puts a multi-line command on the clipboard for testing purposes
const ncp = require('copy-paste');

const multiLineCommand = `docker run \\
  --name my-container \\
  -p 8080:80 \\
  -v /path/to/data:/app/data \\
  my-image:latest`;

ncp.copy(multiLineCommand, (error) => {
  if (error) {
    console.error('Failed to write to clipboard:', error);
    process.exit(1);
  }
  console.log('Multi-line command copied to clipboard. Now run "node index.js" to convert it.');
});