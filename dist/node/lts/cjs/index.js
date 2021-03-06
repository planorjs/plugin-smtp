'use strict';

var smtpClient = require('smtp-client');
var core = require('@planorjs/core');

class PlanorServiceSmtp extends core.PlanorService {
  constructor(credentials, opts = {}) {
    super('smtp', 'email');
    this.credentialKeys = ['host', 'port', 'username', 'password'];
    this.setCredentials(credentials);
    this.setOpts(opts);
  }

  async getClient() {
    const creds = super.getCredentials();
    this.client = new smtpClient.SMTPClient({
      host: creds.host,
      port: creds.port,
      secure: true
    });
    return this.client;
  }

  async send(mimemsg, msgopts) {
    const creds = super.getCredentials();
    mimemsg.setSender(creds.username);
    await this.client.connect(5000);
    await this.client.greet({
      hostname: creds.host
    });
    await this.client.authPlain({
      username: creds.username,
      password: creds.password
    });
    await this.client.mail({
      from: creds.username
    });
    const allRecipients = mimemsg.getRecipients({
      type: 'to'
    }).concat(mimemsg.getRecipients({
      type: 'cc'
    })).concat(mimemsg.getRecipients({
      type: 'bcc'
    }));

    for await (var p1 of allRecipients.map(m => this.client.rcpt({
      to: m.addr
    }))) {}

    await this.client.data(mimemsg.asRaw());
    await this.client.quit();
    return {
      id: 'SENT'
    };
  }

}

module.exports = PlanorServiceSmtp;
//# sourceMappingURL=index.js.map
