# Auctions API

### A Serverless API that allow us to create auctions for any items using the AWS infraestrutucture using the serverless framework.
<br>
<br>
In this project im use the following resources of AWS:

- lambda
- API Gateway 
- DynamoDb

<br>

## Routes

- /auction - `POST`

  `REQUEST`: Receive in the body the name of the item that will be created.  
  `RESPONSE`: Status code `201` and an JSON with details.

![](docs/img/createAuction.jpeg)

<br>

- /auctions - `GET`
  
  `RESPONSE`: Status code `200` and an JSON with all the itens that are on auctions.

![](docs/img/getAuctions.jpeg)

<br>

- /auction/{id} - `GET`
  
  `RESPONSE`: Status code `200` and a JSON with a item that matchs the id receivied by path parameter.

![](docs/img/getAuctionById.jpeg)


- /auction/{id}/bid - `PATCH`
  
  `REQUEST`: Recieve the value of a auction.  
  `RESPONSE`: Status code `200` and a JSON with a item that matchs the id receivied by path parameter and the new value of the auction.

![](docs/img/placeBid.jpeg)

### [Add delete method]