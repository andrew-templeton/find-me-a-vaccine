
import { useEffect } from 'react'

const SLACK_INVITE_LINK = 'https://join.slack.com/t/find-me-a-vax/shared_invite/zt-ohb0c386-ZLR3~z0zn7mt_GXN2OvI0Q'

const RedirectablePage = ({ force }) => {
  useEffect(() => {
    if (window.location.href.match(/^https:\/\/join\./) || force) {
      window.location.href = SLACK_INVITE_LINK
    }
  }, [])
  return ''
}

export default RedirectablePage
