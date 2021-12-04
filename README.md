# planor-plugin-smtp
Planor smtp plugin.

## Usage
```js
import PlanorServiceSmtp from '../src/index.js'

const credentials = {
  host: 'mail.test.net',
  port: '465',
  username: 'test@test.com',
  password: '----'
}

const service = new PlanorServiceSmtp(credentials)
```

---

Version management of this repository done by [releaser](https://github.com/muratgozel/node-releaser) 🚀
