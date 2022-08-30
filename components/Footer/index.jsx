import { useRouter } from 'next/router'
import Link from 'next/link'

const Footer = () => {
  const { locales } = useRouter()

  return (
    <footer>
      <div className="">
        {[...locales].sort().map(locale => (
          <Link key={locale} href="/" locale={locale}>
            {locale}
          </Link>
        ))}
      </div>
    </footer>
  )
}

export default Footer
