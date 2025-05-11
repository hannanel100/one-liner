# One-Liner CLI

A command-line utility to convert multi-line terminal commands into a single line.

## Installation

You can install this tool globally from npm:

```
npm install -g one-liner-cli
```

## Usage

After copying a multi-line command to your clipboard, simply run:

```
one-liner
```

This will read the command from your clipboard, convert it to a single line, and print the result to the console.

### Options

- `-c, --copy`: Read from clipboard and write the result back to clipboard
- `-p, --print`: Print the result to console (default)
- `-v, --verbose`: Show both original and converted command

### Examples

Basic usage (prints the converted command):
```
one-liner
```

Copy the result back to clipboard:
```
one-liner --copy
```

Show both original and converted command:
```
one-liner --verbose
```

Copy the result to clipboard and don't print to console:
```
one-liner --copy --no-print
```

## How It Works

This tool:

1. Reads text from your clipboard
2. Converts multi-line commands into a single line by:
   - Removing line continuation characters (`\` at the end of lines)
   - Replacing newlines with spaces
   - Removing extra spaces
3. Outputs the result to the console and/or clipboard based on options

## Development

To develop locally:

1. Clone the repository:
   ```
   git clone https://github.com/hannanel100/one-liner-cli.git
   cd one-liner-cli
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Link for local development:
   ```
   npm link
   ```

## License

ISC
