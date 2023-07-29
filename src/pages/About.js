import React, { useContext } from 'react'
import { LinkContext } from '../context/link-context'

const About = () => {

  const {linkData, setLinkData} = useContext(LinkContext)

  return (
    <div>Hakkımızda</div>
  )
}

export default About