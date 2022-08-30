import { useRouter } from 'next/router'
import Link from 'next/link'

const Header = () => {
  const { locales } = useRouter()

  return (
    <header>
      <div className="">
        {[...locales].sort().map(locale => (
          <Link key={locale} href="/" locale={locale}>
            {locale}
          </Link>
        ))}
      </div>
    </header>
  )
}

export default Header
