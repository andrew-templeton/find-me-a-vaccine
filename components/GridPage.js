
import Head from 'next/head'
import { useEffect, useRef } from 'react'
import styles from './GridPage.module.css'
import RedirectablePage from './RedirectablePage'
import CsLink from './CsLink'

const GridPage = ({ title, description, items }) => {

  const refs = items.map(item => useRef())

  const scrollTo = ref => {
    const { top } = ref.current.getBoundingClientRect()
    const { pageYOffset } = window
    window.scroll(0, top + pageYOffset)
  }
  const titleize = string => string.trim().toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '')

  useEffect(() => {
    const listenForHashChange = () => {
      console.log('HASH CHANGE', location.hash)
      const { hash } = location
      const match = hash && items.find(({ title }) => hash === `#${titleize(title)}`)
      console.log(match)
      console.log(items.indexOf(match))
      if (match) {
        scrollTo(refs[items.indexOf(match)])
      }
    }
    window.addEventListener('hashchange', listenForHashChange)
    listenForHashChange()
    return () => window.removeEventListener('hashchange', listenForHashChange)
  }, [])


  return (
    <div className={styles.container}>
      <Head>
        <title>Find Me A Vaccine | {title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <RedirectablePage/>

      <h3 style={{ position: 'fixed', top: '0', width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'center', backgroundColor: 'white', borderBottom: '1px solid black', padding: '20px 0', margin: 0}}><CsLink href="/">Back to Home</CsLink></h3>

      <main className={styles.main}>
        <h1 className={styles.title}>
          {title}
        </h1>

        <p className={styles.description}>
          {description}
        </p>
        <div className={styles.grid}>
          {items.map(({ title, link, newPage }, index) => (
            <CsLink title={`Scrolls to content for ${title}`} target={newPage ? '_blank' : ''} href={link || `#${titleize(title)}`} className={styles.card} key={index}>
              <h3>{title}</h3>
            </CsLink>
          ))}
        </div>

        <div className={styles.gridTarget}>
          {items.map(({ title, copy, link }, index) => (
            link
              ? ''
              : <div ref={refs[index]} key={index}>
                  <a href={`#${titleize(title)}`}>
                    <h3>{title}</h3>
                  </a>
                  {'string' === typeof copy
                    ? <p>{copy}</p>
                    : copy
                  }
              </div>
          ))}
        </div>

      </main>

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

export default GridPage
