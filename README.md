# adventure-web

This is a web client to play stories written for 
[Adventure](https://github.com/maelys-mcardle/adventure).

## Installation

Make sure [NodeJS](https://nodejs.org/) and [Git](https://git-scm.com/) are
installed. To install, run the following in a command-line prompt:

```sh
# Download the source code.
git clone https://github.com/maelys-mcardle/adventure-web

# Switch to the repository.
cd adventure-web

# Install the dependencies.
npm install
```

## Setting the story to play

Edit the `package.json` file to point to the path of your story:

```json
{
  "config": { 
    "port": "8080",
    "story": "node_modules/adventure/examples/thehouse/"
  },
}
```

The `port` refers to the port the web server will listen on.

## Running the client

Start the server by running the following command:

```sh
npm run start
```

Then open your browser to the following:

```
http://localhost:8080/
```