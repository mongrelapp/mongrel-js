# Javascript client for Mongrel


## Installing

Using npm:

```bash
$ npm install @mongrelapp/mongreljs
```

Using bower:

```bash
$ bower install @mongrelapp/mongreljs
```

Using yarn:

```bash
$ yarn add @mongrelapp/mongreljs
```

### Quick Start:

```javascript
const mongrelDB = require("@mongrelapp/mongreljs");

const db = mongrelDB({
  database: "DATABASE_ID",
  token: "API_TOKEN",
});
```

#### Get:

```javascript
db.get("example")
    .then((resp) => console.log(resp.value))
    .catch(console.error);
```

#### Put or Update:

```javascript
db.put("example", "this is an example value")
    .then((resp) => console.log(resp.value))
    .catch(console.error);
```

#### Delete:

```javascript
db.delete("example")
    .then((resp) => console.log(resp))
    .catch(console.error);
```


## License

[MIT](LICENSE)
