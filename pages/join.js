
import RedirectablePage from '../components/RedirectablePage'
import GridPage from '../components/GridPage'
import CsLink from '../components/CsLink'

const content = {
  title: 'Redirecting to Slack...',
  description: <>
    Or if this does not redirect,{' '}
    <CsLink href="/join">click here please</CsLink>
    <RedirectablePage force={true}/>
  </>,
  items: []
}


const Join = () => GridPage(content)

export default Join
