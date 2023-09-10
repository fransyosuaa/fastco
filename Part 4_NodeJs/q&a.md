# Part 4: Node.js

## Write a Node.js script that reads a CSV file and inserts the data into a MongoDB collection.

before (only have two collections)
![Alt text](image.png)

```
npm run read:csv
```

after (csv collection is added)
![Alt text](image-1.png)

## Create a Node.js server that allows users to create and delete user accounts, with the account information stored in a MongoDB collection.

- I create express server. Same like Part 2 task.

### To create user account task, I create entrypoint `POST /user`

before
![Alt text](image-2.png)

execute
![Alt text](image-3.png)

after
![Alt text](image-4.png)

### To delete user account task, I create entrypoint `DELETE /user/:id`

before
![Alt text](image-4.png)

execute
![Alt text](image-5.png)

after
![Alt text](image-6.png)

## Write a Node.js function that takes a string as input and returns the number of words in the string.

```
npm run task:3
```

![Alt text](image-7.png)
