
import { useEffect, useRef, useState } from 'react'

import styles from './HubspotForm.module.css'

const HubspotForm = ({ formId, portalId='19499782', region='na1' }) => {
  const thisComponent = useRef()
  const scriptTag = useRef()
  const [mounted, setMounted] = useState(false)
  const [checks, setChecks] = useState(0)
  useEffect(() => {
    setMounted(true)
  }, [setMounted])
  useEffect(() => {
    if (checks >= 25) {
      window.location.reload()
    }
  }, [checks])
  useEffect(() => {
    const mountAndMove = () => {
      setChecks(now => now + 1)
      if (window.hbspt) {
        hbspt.forms.create({ region, portalId, formId })
        const tryToMoveForm = () => {
          const formContainer = document.querySelector('.hbspt-form')
          if (!formContainer) {
            return setTimeout(tryToMoveForm, 50)
          }
          thisComponent.current.appendChild(formContainer)
        }
        tryToMoveForm()
      } else {
        setTimeout(mountAndMove, 50)
      }
    }
    mountAndMove()
  }, [scriptTag, thisComponent, setChecks])
  return <div ref={thisComponent} className={styles.hubspotFormContainer}>
    <script ref={scriptTag} charSet="utf-8" type="text/javascript" src="//js.hsforms.net/forms/shell.js"/>
  </div>
}

export default HubspotForm
