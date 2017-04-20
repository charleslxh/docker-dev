# Docker-dev

A NodeJS development environment, Include nginx proxy, reids sentinel, mongodb

## Run it

1. Install libs.

```bash
$ npm install
```

2. Build containers.

```bash
$ docker-compose up --build
```

3. Add `www.example.com` and `api.example.com` to `/etc/hosts`

4. Visit [http://www.example.com](http://www.example.com)

## Generate Self-Signed Certificate

1. Generate a Private Key.

  ```bash
  $ openssl genrsa -des3 -out server.key 1024
  ```

2. Generate a CSR (Certificate Signing Request).

  ```bash
  $ openssl req -new -key server.key -out server.csr
  ```

3. Remove Passphrase from Key.

  ```bash
  $ cp server.key server.key.org
  $ openssl rsa -in server.key.org -out server.key
  ```

4. Generating a Self-Signed Certificate.

  ```bash
  $ openssl x509 -req -days 365 -in server.csr -signkey server.key -out server.crt
  ```

5. Remove.

  ```bash
  $ rm server.key.org && rm server.csr
  $ mv server.crt ssl.crt
  $ mv server.key ssl.key
  ```
