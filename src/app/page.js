import style from '../styles/pages/home/layout/style.module.css'

import Layout from './home/layout'
import SocialMedia from '../app/home/components/social_media'
import ContactMe from '../app/home/components/contact_me'
import Main from './home/main'

import React from "react";

export default function Home(){
  return (
    <Layout>
      <div className={`animate__animated animate__fadeIn animate__slower ${style.container}`}>
        <aside className={`col col-1 col-s-2 ${style.aside}`} id={style.asideLeft}> <SocialMedia /> </aside>
        <section className={`col col-12 col-s-8 ${style.main}`} id={style.mainId} > <Main /> </section>
        <aside className={`col col-1 col-s-2 ${style.aside}`} id={style.asideRight}> <ContactMe /> </aside> 
      </div>
    </Layout>
  )
}


