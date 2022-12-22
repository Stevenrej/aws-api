# Lab 18

## What is the root URL to your API?

- [url](https://5qmk5f7gpd.execute-api.us-east-2.amazonaws.com/deployment)

## What are the routes?

- /people

- GET(all)
- GET(one)
- POST
- DELETE(one)
- PUT(one)

## What inputs do they require?

- GET(all)
- GET(id)
  - handleRead

- POST
  - handleCreate

- DELETE(id)
  - handleDelete

- PUT(id)
  - handleUpdate

## What output do they return?

- handleRead
  - gets people models, either all or one if get with id

- handleCreate
  - creates a new people model

- handleDelete
  - deletes and individual people model

- handleUpdate
  - updates and individual people model

## UML

[uml](lab18.jpeg)