export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '604ca18c99765aeb5c0fcf4f',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-bneqsgq8',
                  apiId: '6720094b-552d-4e74-9f73-183d7d72a7d7'
                },
                {
                  buildHookId: '604ca18ccfdb60ef694981a4',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-xjhqjdg1',
                  apiId: '5523dcd9-fb1d-4a4b-8725-a892b8f695aa'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/MagneticMule/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-xjhqjdg1.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
