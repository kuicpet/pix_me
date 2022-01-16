import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

const SANITY_PROJECT_ID = import.meta.env.VITE_SANITY_PROJECT_ID
const SANITY_TOKEN = import.meta.env.VITE_SANITY_TOKEN

export const client = sanityClient({
    projectId: SANITY_PROJECT_ID,
    dataset: 'production',
    apiVersion: '2022-01-16',
    useCdn: true,
    token: SANITY_TOKEN
})
const builder = imageUrlBuilder(client)

export const urlFor = (source) => builder.image(source)