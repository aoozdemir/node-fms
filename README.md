# Node File Management

NFM is a simple file management application written using NodeJS + ExpressJS.

## Installation

To build and start the application, you need to run the following commands.

```bash
$ npm install                 # This will install all the packages
$ DEBUG=nodefm:* npm start    # This will start the server on default port and directory
```

To change the default port (`8080`) and the default directory (`current path`), you can pass the following arguments.

```bash
$ DEBUG=nodefm:* npm start -- -p 3000 -d 'workspace/'
```

## Functionality and API

On the back, there is a simple crud api to achieve the following functionalities;

- A GET Endpoint to list directories or view single file
- A DELETE Endpoint to delete a file or a directory. **Directory must be empty before delete.**
- A PUT Endpoint to rename and move files or directories.
- A POST Endpoint to create a directory.

The API runs behind `http://localhost:$PORT/api` and takes a query parameter called `path` to navigate through your directories.

Initially PUT endpoint was also expecting a `target` parameter. However, I later changed it to take the target path as a form input, which made it easier to send and handle. And since rename and move are basically the same operation, you'll only see the `outgoing arrow` button to open up the input form.

## Missing Parts

Following functionalities are missing at the moment.

- [x] Content editing
- [ ] Create a directory on the frontend
- [ ] A virtual terminal to handle command line operations
