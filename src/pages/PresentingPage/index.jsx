import { groupMembers } from "../../context/groupMembers";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion"

import './style.scss'

export default function PresentingPage() {
  const [groupMemberPresenting, setGroupMemberPresenting] = useState(checkGroupMemberPresenting())
  const [isOpen, setIsOpen] = useState(false)
  
  useEffect(() => {
    addGroupMemberPresentingToLocalStorage(groupMemberPresenting)
  }, [groupMemberPresenting.id])

  return (
    <div className="presenting-page" style={addBackground(groupMemberPresenting)}>
      <header className="presenting-page-header">
        <h3>{ groupMemberPresenting.name }</h3>
      </header>
      <main className="presenting-page-main">
        <button onClick={() => { returnGroupMemberPresenting(groupMemberPresenting, setGroupMemberPresenting) }}>
          <span class="material-symbols-outlined">arrow_back</span>
        </button>
        <div>
          <h1>{ groupMemberPresenting.title }</h1>
        </div>
        <button onClick={() => { nextGroupMemberPresenting(groupMemberPresenting, setGroupMemberPresenting) }}>
          <span class="material-symbols-outlined">arrow_forward</span>
        </button>
      </main>
      <footer className="presenting-page-footer">
        <AnimateSharedLayout>
        <AnimatePresence>
          {
            isOpen &&
            <motion.div
            className="group-member-content"
            layoutinitial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
            <div className="group-member-content-container">{ groupMemberPresenting.container }</div>
            </motion.div>
          }
        </AnimatePresence>
          <motion.ul layout initial={{ borderRadius: 25 }}>
            <motion.li layout onClick={() => { setIsOpen(!isOpen) } } initial={{ borderRadius: 10 }}>
              <motion.div className="avatar" layout />
            </motion.li>
          </motion.ul>
        </AnimateSharedLayout>
      </footer>
    </div>
  )
}

// Functions

function addGroupMemberPresentingToLocalStorage(groupMemberPresenting) {
  if (localStorage.getItem('currentGroupMemberPage') != groupMemberPresenting.id) {
    localStorage.setItem('currentGroupMemberPage', `${groupMemberPresenting.id}`)
  }
}

function checkGroupMemberPresenting() {
  if (localStorage.getItem('currentGroupMemberPage') !== null) {
    return groupMembers[localStorage.getItem('currentGroupMemberPage')]
  }

  return groupMembers[0]
}

function addBackground({ background }) {
  return {
    backgroundImage: `linear-gradient(to left, rgba(0, 0, 0, 0.793), rgb(0, 0, 0)), url(${background})`
  }
}

function returnGroupMemberPresenting(groupMemberPresenting, setGroupMemberPresenting) {
  if (groupMemberPresenting.id !== 0) {
    setGroupMemberPresenting(groupMembers[groupMemberPresenting.id - 1])
  } 
}

function nextGroupMemberPresenting(groupMemberPresenting, setGroupMemberPresenting) {
  if (groupMemberPresenting.id !== 5) {
    setGroupMemberPresenting(groupMembers[groupMemberPresenting.id + 1])
  }
}