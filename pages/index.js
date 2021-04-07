
import GridPage from '../components/GridPage'
import CsLink from '../components/CsLink'

const content = {
  title: 'Welcome to Find Me A Vaccine!',
  description: <>
    Get started by{' '}
    <CsLink href="/join">joining the Slack</CsLink>, or reading some of the resources below...
  </>,
  items: [
    {
      title: 'Join the Slack',
      link: '/join',
      newPage: true
    },
    {
      title: 'How To Book',
      link: '/how-to-book'
    },
    {
      title: 'Additional Resources',
      link: '/resources'
    },
    {
      title: 'Second Dose Information',
      link: '/second-dose'
    },
    {
      title: 'Provider-Specific Information',
      link: '/providers'
    },
    {
      title: 'Causes We Love',
      link: '/causes-we-love'
    }
  ]
}


const Home = () => GridPage(content)

export default Home
