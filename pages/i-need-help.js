
import Head from 'next/head'
import RedirectablePage from '../components/RedirectablePage'
import CsLink from '../components/CsLink'
import styles from '../components/GridPage.module.css'

import HubspotForm from '../components/HubspotForm'

const formId = '0bd9e0af-6c78-48e5-a5b2-76b2593004e8'

const GetBookedEnglish = ({ title, description, items }) => {


  return (
    <div className={styles.container}>
      <Head>
        <title>Find Me A Vaccine | {title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <RedirectablePage/>

      <h3 style={{
        position: 'fixed',
        top: '0',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderBottom: '1px solid black',
        padding: '20px 0',
        margin: 0
      }}>
        <CsLink href="/">Back to Home</CsLink>
      </h3>

      <HubspotForm formId={formId}/>

      <footer className={styles.footer}>
        <a
          href="https://github.com/andrew-templeton"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Andrew Templeton, copyright Andrew Templeton {new Date().getYear() + 1900}
        </a>
      </footer>
    </div>
  )
}

export default GetBookedEnglish
