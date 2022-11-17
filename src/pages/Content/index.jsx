import Renan from "../../components/content/Renan";
import Bryan from "../../components/content/Bryan";
import Willian from "../../components/content/Willian";
import Bruno from "../../components/content/Bruno";
import JordanGabryel from "../../components/content/JordanGabryel";
import Abner from "../../components/content/Abner";

import { useState } from "react";
import Scrollbar, { ScrollbarPlugin } from 'smooth-scrollbar';
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion"

import './style.scss'
import { useRef } from "react";
import { useEffect } from "react";

export default function Content() {
  const presenterData = [
    {
      id: 0,
      name: "Renan",
      background: "https://www.telegraph.co.uk/content/dam/technology/2016/12/17/JS116348132_Biko-protests-AP_trans_NvBQzQNjv4Bq0RglTN43wyGR-NQABDM7EkdijWCdRYl6PyLHMKfN-ss.jpg",
      title: "Significado",
      container: <Renan />
    },
    {
      id: 1,
      name: "Bryan",
      background: "https://cdn.24.co.za/files/Cms/General/d/7072/7c4468d06b4b49e197476d39260de571.jpg",
      title: "Execução",
      container: <Bryan />
    },
    {
      id: 2,
      name: "Willian",
      background: "https://aidc.org.za/wp-content/uploads/2017/06/p1070908.jpg",
      title: "Tipos",
      container: <Willian />
    },
    {
      id: 3,
      name: "Bruno",
      background: "https://lh3.googleusercontent.com/19abulhMBQR5D0MPyL4Q2HBDUs-LrnqUZ7TukiGFzMbvCQ8ebq9LZL6mCO05kn1spNRuf50jye8S1PYdwoCqXY9SIGr0nMwz1QEBlIoh_fvKzzg=s750",
      title: "Ações afirmativas",
      container: <Bruno />
    },
    {
      id: 4,
      name: "Abner",
      background: "https://www.sahistory.org.za/sites/default/files/article_image/biko_funeral_saso.jpg",
      title: "Profissões",
      container: <Abner />      
    },
    {
      id: 5,
      name: "Jordan e Gabryel",
      background: "https://image-prod.iol.co.za/16x9/800/Mourners-at-black-consciousness-leader-Steve-Biko-funeral-in-1977-File-photo-Independent-Archives-Original-hard-copy-stamped-26-Sep-1977?source=https://xlibris.public.prod.oc.inl.infomaker.io:8443/opencontent/objects/d9ba7b4b-c08a-5d94-97f7-9f3dca603545",
      title: "Exemplos",
      container: <JordanGabryel />
    }
  ]
  const [content, setContent] = useState(() => {
    if (localStorage.getItem('currentPageContent') !== null) {
      return presenterData[localStorage.getItem('currentPageContent')]
    } else {
      return presenterData[0]
    }
  })
  const [isOpen, setIsOpen] = useState(false)
  const toggleOpen = () => setIsOpen(!isOpen)

  
  useEffect(() => {
    if (localStorage.getItem('currentPageContent') != content.id) {
      localStorage.setItem('currentPageContent', `${content.id}`)
    }
  }, [content.id])

  const returnContent = () => {
    if (content.id !== 0) {
      setContent(presenterData[content.id - 1])
    } 
  }

  const nextContent = () => {
    if (content.id !== 5) {
      setContent(presenterData[content.id + 1])
    }
  }

  return (
    <div className="presenter-content" style={{ backgroundImage: `linear-gradient(to left, rgba(0, 0, 0, 0.793), rgb(0, 0, 0)), url(${content.background})`}}>
      <header>
        <h3>{ content.name }</h3>
      </header>
      <main>
        <button onClick={() => { returnContent() } }>Voltar</button>
        <div>
          <h1>{ content.title }</h1>
        </div>
        <button onClick={() => { nextContent() } }>Próximo</button>
      </main>
      <footer>
        <AnimateSharedLayout>
          <AnimatePresence>
            {
              isOpen &&
              <motion.div
              className="content"
              layoutinitial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}>
                <div className="content-container">{ content.container }</div>
              </motion.div>
            }
          </AnimatePresence>
          <motion.ul layout initial={{ borderRadius: 25 }}>
            <motion.li layout onClick={toggleOpen} initial={{ borderRadius: 10 }}>
              <motion.div className="avatar" layout />
            </motion.li>
          </motion.ul>
        </AnimateSharedLayout>
      </footer>
    </div>
  )
}
  