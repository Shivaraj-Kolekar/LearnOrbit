import { Client, Databases } from 'appwrite'

const client = new Client()
  .setEndpoint('YOUR_APPWRITE_ENDPOINT') // Your API Endpoint
  .setProject('YOUR_PROJECT_ID') // Your project ID

const databases = new Databases(client)

export { client, databases }
