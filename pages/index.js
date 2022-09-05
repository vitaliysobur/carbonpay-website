import Head from 'next/head'
import Image from 'next/image'
import s from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={s.container}>
      <Head>
        <title>CarbonPay</title>
        <meta name="description" content="Fight climate change by doing whatever you do best" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={s.main}>
        <header className={s.header}>
          <div className={s.headerInner}>
            <div className={s.logo}>
              <Image src="/carbonpay-logo.png" width="256px" height="64px" layout="fixed" />
            </div>
            <ul className={s.menu}>
              <li><a href="#about">About</a></li>
              <li><a href="#docs">Docs</a></li>
              <li><a href="#faq">FAQ</a></li>
              <li className={s.btnSection}><button className={s.btn}>Launch App</button></li>
            </ul>
          </div>
        </header>
        <div className={s.content}>
          <h1 className={s.title}><span className={s.white}>carbon</span><span className={s.orange}>Pay</span></h1>
          <h2 className={s.subTitle}><span className={s.white}>Fight climate change by doing what you do best</span></h2>
        </div>
      </main>
    </div>
  )
}
