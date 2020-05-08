import React, { useEffect } from 'react'
import Technology from './technology'

import {
nsec,
snu,
ti,
src,
sit,
msit,
tib,
tint,
facebook,
instagram,
linkedin,
youtube,
twitter,
} from '../utils/svgs'

const frontEnd = [
  {
    title: 'Techno India Group',
    svg: ti,
    href: 'https://technoindiagroup.com',
  },
  { title: 'Satyam Roy Chowdhury Initiative', svg: src, href: 'https://snuniv.ac.in' },
]

const backEnd = [
  { title: 'tib', svg: tib, href: 'https://nodejs.org/' },
  { title: 'snu', svg: snu, href: 'https://www.ruby-lang.org' },
  { title: 'nsec', svg: nsec, href: 'https://rubyonrails.org/' },
  { title: 'sit', svg: sit, href: 'https://elixir-lang.org' },
  { title: 'msit', svg: msit, href: 'https://www.phoenixframework.org' },
  { title: 'tint', svg: tint, href: 'https://crystal-lang.org/' },
]

const tools = [
  { title: 'Facebook', svg: facebook, href: 'https://www.heroku.com' },
  { title: 'Instagram', svg: instagram, href: 'https://www.docker.com' },
  { title: 'Linkedin', svg: linkedin, href: 'https://webpack.js.org' },
  { title: 'Youtube', svg: youtube, href: 'https://aws.amazon.com/' },
  {
    title: 'Twitter',
    svg: twitter,
    href: 'https://www.digitalocean.com',
  },
]

const createTechnology = ({ title, svg, href }) => (
  <Technology key={title} svg={svg} title={title} href={href} />
)

const Technologies = () => {
  useEffect(() => {
    // have to require here as importing at top breaks SSR
    // eslint-disable-next-line
    const ScrollReveal = require('scrollreveal').default

    ScrollReveal().reveal('.technologies a, .technologies h3', {
      duration: 600,
      distance: '20px',
      easing: 'cubic-bezier(0.5, -0.01, 0, 1.005)',
      origin: 'left',
      interval: 75,
    })

    return () => ScrollReveal().destroy()
  }, [])

  return (
    <div className="technologies">
      <h1 className="technologies__title">Our Supporters</h1>
      <div>
        <h3>In Association With</h3>
        <div className="technologies__row">
          {frontEnd.map(createTechnology)}
        </div>
      </div>

      <div>
        <h3>Powered By</h3>
        <div className="technologies__row">{backEnd.map(createTechnology)}</div>
      </div>

      <div>
        <h3>Social Connect</h3>
        <div className="technologies__row">{tools.map(createTechnology)}</div>
      </div>
    </div>
  )
}

export default Technologies
