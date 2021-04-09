
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
      title: 'I Need Help',
      link: '/i-need-help'
    },
    {
      title: 'Necesito Ayuda',
      link: '/necesito-ayuda'
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
    },
    {
      title: 'Vaxxie Source Code',
      link: 'https://github.com/andrew-templeton/vaxxie'
    },
    {
      title: 'Tip The Vaxxie Author',
      link: 'https://vaxxie.me'
    },
    {
      title: 'Privacy Policy',
      link: '/privacy-policy'
    },
    {
      title: 'Política de Privacidad',
      link: '/politica-de-privacidad'
    },
  ]
}


const Home = () => GridPage(content)

export default Home
