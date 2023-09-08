# Setup Project

## Installation

### Nodemon

```
npm i -g nodemon
```

### MongoDB

1. Download [here](https://www.mongodb.com/try/download/community). In here, I download version 4.0.28 Windows 64bit.
2. After installation, go to your Windows Explorer
   1. Create folder `D:\data\db`. Make sure its name with all lowercase.
   2. Go to your installation folder (`C:\Program Files\MongoDB\Server\4.0\bin`)
   3. Go to Root (`C:\Users\yourname`).
      1. Create hidden file `.bash_profile`.
      2. Insert these two lines of code, then save
      ```
      alias mongod="/c/Program\ Files/MongoDB/Server/4.0/bin/mongod.exe"
      alias mongo="/c/Program\ Files/MongoDB/Server/4.0/bin/mongo.exe"
      ```
      3. You can check whether your installation is success or not from your terminal
      ```
      mongo --version
      ```
      It should return message like this
      ```
      MongoDB shell version v4.0.28
      git version: af1a9dc12adcfa83cc19571cb3faba26eeddac92
      allocator: tcmalloc
      modules: none
      build environment:
          distmod: 2008plus-ssl
          distarch: x86_64
          target_arch: x86_64
      ```

### Dependencies

```
npm i
```

## Run the program

1. Run the mongod

```
mongod
```

2. Run the server

```
npm run dev
```

3. For insert data hit this API

```
POST
localhost:3000/insert
```

4. For get data hit this API

```
GET
localhost:3000
```
