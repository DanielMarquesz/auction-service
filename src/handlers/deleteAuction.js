import AWS from 'aws-sdk';
import createError from 'http-errors';
import getAuctionById from './getAuction'
const dynamodb = new AWS.DynamoDB.DocumentClient();
import commonMiddleware from '../lib/commonMiddleware';

async function deleteAuction(event, context) {
  console.log(event)
  const { id } = event.pathParameters;

  try {
    await dynamodb.delete({
      TableName: process.env.AUCTIONS_TABLE_NAME,
      Key: {
        id: id
      }
    }).promise().then(response => { message: 'deleted' })
  } catch (error) {
    throw new createError.BadRequest(error)
  }

  return {
    statusCode: 204,
    message: `Auction ${id} deleted`
  }

}

export const handler = commonMiddleware(deleteAuction);