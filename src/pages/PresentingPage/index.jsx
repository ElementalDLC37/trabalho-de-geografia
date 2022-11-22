import { useState, useEffect, useRef } from "react";

import { groupMembers } from "../../context/groupMembers";

import GroupMemberContentController from "../../components/content/GroupMemberContentController";

import { motion } from "framer-motion"

import './style.scss'
import gsap from "gsap";

export default function PresentingPage() {
  const [groupMemberPresenting, setGroupMemberPresenting] = useState(checkGroupMemberPresenting())
  const [background, setBackground] = useState(true)
  
  useEffect(() => {
    addGroupMemberPresentingToLocalStorage(groupMemberPresenting)
    setBackground(!background)
  }, [groupMemberPresenting.id])

  return (
    <>
    { background && <Background background={groupMemberPresenting.background} /> }
    <motion.div className="presenting-page">
      <header className="presenting-page-header">
        <h3>{ groupMemberPresenting.name }</h3>
      </header>
      <main className="presenting-page-main">
        <motion.button whileTap={{ scale: 0.89 }} onClick={() => { returnGroupMemberPresenting(groupMemberPresenting, setGroupMemberPresenting) }}>
          <span class="material-symbols-outlined">arrow_back</span>
        </motion.button>
        <div>
          <h1>{ groupMemberPresenting.title }</h1>
        </div>
        <motion.button whileTap={{ scale: 0.89 }} onClick={() => { nextGroupMemberPresenting(groupMemberPresenting, setGroupMemberPresenting) }}>
          <span class="material-symbols-outlined">arrow_forward</span>
        </motion.button>
      </main>
      <footer className="presenting-page-footer">
        <GroupMemberContentController groupMemberPresenting={groupMemberPresenting} />
      </footer>
    </motion.div>
    </>
  )
}

function Background({ background }) {
  return (
    <motion.div className="background"
      style={{
        backgroundImage: `linear-gradient(to left, rgba(0, 0, 0, 0.793), rgb(0, 0, 0)), url(${background})`
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 1 }}
    >
    </motion.div>
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