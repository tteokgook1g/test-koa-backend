## env
To run this script, you need to touch .env and write them.
```
PORT=(your port number)
```

## GET `/`
GETs "Hello, world!".

### Body

| Name | Type | Mandatory | Example | Default | Description |
| ---- | ---- | --------- | ------- | ------- | ----------- |


### Response Params

| Name   | Type    | Mandatory | Example | Default | Description        |
| ------ | ------- | --------- | ------- | ------- | ------------------ |
| data   | string | Y         |         |         | string "Hello, World!" |

### Result Code

| code | message                           |
| ---- | --------------------------------- |
| 200  | Success                           |
