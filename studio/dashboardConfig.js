export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
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
                  buildHookId: '616b266874687fcff117acfe',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-qpg5z99o',
                  apiId: '051177e2-502f-47da-ae11-c028420c68c4'
                },
                {
                  buildHookId: '616b26697f9d4fa3c6def519',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-w8wvhj6t',
                  apiId: '52e66083-1627-436b-b0ec-0a6aa465efc7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mk-mi-berlin/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-w8wvhj6t.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
