
import Link from 'next/link'

const CsLink = ({ href, children, ...rest }) => (
  href === '/'
    ? <Link href="/index" as="/"><a {...rest}>{children}</a></Link>
    : /^\/[^\/]/.test(href)
      ? <Link href={href}><a {...rest}>{children}</a></Link>
      : <a href={href} {...rest}>{children}</a>
)

export default CsLink
