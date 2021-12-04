# planor-plugin-smtp
Planor smtp plugin.

## Usage
```js
import PlanorServiceSmtp from '../src/index.js'

const credentials = {
  host: 'mail.gandi.net',
  port: '465',
  username: 'destek@kolilazim.com',
  password: 'mrB.6721'
}

const service = new PlanorServiceSmtp(credentials)
```

---

Version management of this repository done by [releaser](https://github.com/muratgozel/node-releaser) 🚀
