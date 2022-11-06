import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

// add token to sanity client. CORS origins http://localhost:3000
export const client = sanityClient({
   projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
   dataset: 'production',
   apiVersion: '2021-10-21',
   useCdn: true, 
   token: process.env.REACT_APP_SANITY_PROJECT_TOKEN,
})

// to use images with sanity
const builder = imageUrlBuilder(client)
export const urlFor = (source) => builder.image(source)