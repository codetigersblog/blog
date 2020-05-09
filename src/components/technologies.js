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
slack,
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
  { title: 'Techno India Batanagar', svg: tib, href: 'https://tib.edu.in/' },
  { title: 'Sister Nivedita University ', svg: snu, href: 'https://www.snuniv.ac.in/' },
  { title: 'Netaji Subash Engineering College', svg: nsec, href: 'https://www.nsec.ac.in/' },
  { title: 'Silliguri Institute of technology', svg: sit, href: 'https://www.sittechno.org/' },
  { title: 'Meghnad Saha Institute of Technology', svg: msit, href: 'https://msit.edu.in/' },
  { title: 'Techno International New Town', svg: tint, href: 'https://tint.edu.in/' },
]

const tools = [
  { title: 'Facebook', svg: facebook, href: 'https://www.facebook.com/TIGCodeTigers/' },
  { title: 'Instagram', svg: instagram, href: 'https://www.instagram.com/codetigers/' },
  { title: 'Linkedin', svg: linkedin, href: 'https://www.linkedin.com/company/code-tigers/' },
  { title: 'Youtube', svg: youtube, href: 'https://www.youtube.com/channel/UC8IBU5Xgk3psB14VHNNUgqQ' },
  { title: 'Slack', svg: slack, href: 'https://join.slack.com/t/code-tigers/shared_invite/zt-e23okw0i-Qk0YHyA3~Q2qPDs8moKK4g' },
  {
    title: 'Twitter',
    svg: twitter,
    href: 'https://twitter.com/code_tigers',
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
