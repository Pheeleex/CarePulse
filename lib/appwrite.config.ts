import * as sdk from 'node-appwrite'
export const {
    NEXT_PUBLIC_PROJECT_ID, 
    API_KEY, 
    DATABASE_ID,
    PATIENT_COLLECTION_ID, 
    DOCTOR_COLLECTION_ID,
    APPOINTMENT_COLLECTION_ID,
    NEXT_PUBLIC_BUCKET_ID: BUCKET_ID,
    NEXT_PUBLIC_ENDPOINT: ENDPOINT,
    NEXT_PUBLIC_API_KEY,
} = process.env;

console.log('Endpoint:', process.env.NEXT_PUBLIC_ENDPOINT);
console.log('Project ID:', process.env.NEXT_PUBLIC_PROJECT_ID);
console.log('API Key:', process.env.API_KEY ? 'API Key is set' : 'API Key is missing');

const client = new sdk.Client()
client
    .setEndpoint(ENDPOINT!)
    .setProject(NEXT_PUBLIC_PROJECT_ID!)
    .setKey(process.env.API_KEY!);

export const databases = new sdk.Databases(client);
export const storage = new sdk.Storage(client)
export const messaging = new sdk.Messaging(client)
export const users = new sdk.Users(client)


