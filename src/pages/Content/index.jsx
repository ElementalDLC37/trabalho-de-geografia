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
      background: "renan.jpg",
      title: "Significado",
      container: <Renan />
    },
    {
      id: 1,
      name: "Bryan",
      background: "bryan.jpg",
      title: "Execução",
      container: <Bryan />
    },
    {
      id: 2,
      name: "Willian",
      background: "willian.jpg",
      title: "Tipos",
      container: <Willian />
    },
    {
      id: 3,
      name: "Bruno",
      background: "bruno.jpg",
      title: "Ações afirmativas",
      container: <Bruno />
    },
    {
      id: 4,
      name: "Abner",
      background: "abner.jpg",
      title: "",
      container: <Abner />      
    },
    {
      id: 5,
      name: "Jordan e Gabryel",
      background: "jordangabryel.jpg",
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
    <div className="presenter-content" style={{ backgroundImage: `linear-gradient(to left, rgba(0, 0, 0, 0.793), rgb(0, 0, 0)), url(../../../public/${content.background})`}}>
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
  