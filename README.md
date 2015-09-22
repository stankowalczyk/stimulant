# stimulant

Opinionated bootstrapper for [React](https://facebook.github.io/react/) projects.

## Setup

Simply execute the following commands:

```bash
$ git clone git@github.com:ssilab/stimulant.git
$ cd stimulant
$ npm install
```

## Develop

Execute the following command:

```bash
$ gulp watch
```

This will compile everything to a `dist/` directory and serve your website at `http://localhost:9000`. A watcher will also be spawned to ensure that re-builds automatically occur whenever files change, so just keep that running while you work.

## Deploy

Execute the following command:

```bash
$ NODE_ENV=production gulp build
```

Then simply upload the `dist/` directory to the remote server.

## Related

If React isn't your thing, then perhaps try [beautstrap](https://github.com/ssilab/beautstrap), our AngularJS project bootstrapper.
