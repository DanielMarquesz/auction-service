import AWS from 'aws-sdk';
import commonMiddleware from '../lib/commonMiddleware';
import createError from 'http-errors';

const dynamodb = new AWS.DynamoDB.DocumentClient();

export async function getAuctionById(id) {
  let auction;

  try {
    const result = await dynamodb.get({
      TableName: process.env.AUCTIONS_TABLE_NAME,
      Key: { id }
    }).promise();

    auction = result.Item;

  } catch (error) {
    console.log(error);
    throw new createError.InternalServerError(error);
  }
  return auction;
};


async function getAuction(event, context) {
  // exampleId: a1fc878a-9be0-4ae8-aedc-4481bbdab592
  let auction;
  const { id } = event.pathParameters;

  auction = await getAuctionById(id);

  if (!auction) {
    throw new createError.NotFound(`Auction with ID "${id}" not found!`);
  }

  return {
    statusCode: 200,
    body: JSON.stringify(auction),
  };
}

export const handler = commonMiddleware(getAuction);


