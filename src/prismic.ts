import * as prismic from '@prismicio/client';

export const repositoryName = 'my-website1';

export const client = prismic.createClient(repositoryName, {});
