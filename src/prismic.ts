import * as prismic from '@prismicio/client'

export const repositoryName = 'your-repo-name' // Заміни на свій репозиторій

export const client = prismic.createClient(repositoryName, {
  // Додай тут опції, якщо потрібно
})
