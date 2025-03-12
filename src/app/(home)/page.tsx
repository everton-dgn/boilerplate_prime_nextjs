'use client'

import Image from 'next/image'

import LogoReact from 'assets/logo-react.svg'

import { useCount } from 'viewModel/store/count'

import { Button } from 'components/atoms/Button'

import S from './styles.module.css'

const Home = () => {
  const { stateCount } = useCount()

  return (
    <div className={S.container}>
      <header className={S.header}>Boilerplate</header>
      <main className={S.main}>
        <div className={S.wrapper_images}>
          <Image
            alt="Logo Nextjs"
            height={77}
            priority
            src="/images/logo-nextjs.webp"
            width={77}
          />
          <LogoReact data-testid="logo-react" />
        </div>
        <h1 className="text-4xl font-bold text-center">Nextjs + React</h1>
        <h2 className="text-4xl font-bold text-center">
          Count: {stateCount.count}
        </h2>
        <Button
          aria-label="Increment +1"
          label="Increment +1"
          onClick={stateCount.setIncrement}
        />
        <Button
          aria-label="Decrement -1"
          label="Decrement -1"
          onClick={stateCount.setDecrement}
        />
        <Button
          aria-label="Increment +20"
          label="Increment +20"
          onClick={() => stateCount.setUpdate(20)}
        />
        <Button
          aria-label="Reset"
          label="Reset"
          onClick={stateCount.setReset}
        />
      </main>
    </div>
  )
}

export default Home
