import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full">
        <body class="h-full">
        ```
      */}
      <div className="flex min-h-full flex-col pt-16 pb-12">
        <main className="mx-auto flex w-full max-w-7xl flex-grow flex-col justify-center px-4 sm:px-6 lg:px-8">
          <div className="flex flex-shrink-0 justify-center">
            <a href="/" className="inline-flex">
              <span className="sr-only">Workflow</span>
              <img
                className="w-96 h-auto"
                src="/logo.png"
                alt="EnterUI"
              />
            </a>
          </div>
          <div className="py-16">
            <div className="text-center">
              <p className="mt-2 text-base text-gray-500">
                Coming Soon!
              </p>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

export default Home
