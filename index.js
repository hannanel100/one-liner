#!/usr/bin/env node

const { program } = require('commander');
const ncp = require('copy-paste');

// Version info
program
  .name('one-liner')
  .description('Convert multi-line terminal commands into a single line')
  .version('1.0.0');

// Define the command options
program
  .option('-c, --copy', 'Read from clipboard and write result back to clipboard')
  .option('-p, --print', 'Print the result to console (default)')
  .option('-v, --verbose', 'Show both original and converted command');

program.parse(process.argv);
const options = program.opts();

// Set default option if none specified
if (!options.copy && !options.print) {
  options.print = true;
}

// Main function using the copy-paste library
function main() {
  ncp.paste((error, input) => {
    if (error) {
      console.error('Failed to read from clipboard:', error.message);
      process.exit(1);
    }

    // Skip processing if input is empty or not a multi-line command
    if (!input || !input.includes('\n')) {
      if (options.verbose) {
        console.log('Input is already a one-liner or empty.');
      }
      return;
    }

    // Convert multi-line to one-liner
    const result = convertToOneLiner(input);

    if (options.verbose) {
      console.log('Original command:');
      console.log(input);
      console.log('\nConverted command:');
    }

    if (options.print) {
      console.log(result);
    }

    if (options.copy) {
      ncp.copy(result, (error) => {
        if (error) {
          console.error('Failed to write to clipboard:', error.message);
          process.exit(1);
        }
        if (options.verbose || !options.print) {
          console.log('Converted command copied to clipboard!');
        }
      });
    }
  });
}

function convertToOneLiner(multiLineCommand) {
  // Replace line continuations (\ at end of line)
  let result = multiLineCommand.replace(/\\\s*\n/g, ' ');
  
  // Replace remaining newlines with spaces
  result = result.replace(/\n+/g, ' ');
  
  // Remove extra spaces
  result = result.replace(/\s+/g, ' ').trim();
  
  return result;
}

// Execute the main function
main();