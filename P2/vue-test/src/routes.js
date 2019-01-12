import List from './components/List.vue'
import Detail from './components/Detail.vue'

/*
	array of all global routes of the proyect, in  here we asociated all the components with his routes.
*/
const routes = [
  {
      path: '/',
      name: 'listado',
      component: List,
      children: [
          {
              path: 'details/:id',
              name: 'personaje',
              component: {
                  page: List,
                  details: Detail
              },
              meta: {
                  showModal: true
              }
          }
      ]
  }
]

export default routes
