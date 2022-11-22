import { AnimatePresence, AnimateSharedLayout, motion, usePresence } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import GroupMemberContent from "../GroupMemberContent"

export default function GroupMemberContentController({ groupMemberPresenting }) {
    const [isOpen, setIsOpen] = useState(false)
        
    return (
        <AnimateSharedLayout>
            <AnimatePresence>
                {
                    isOpen && <GroupMemberContent groupMemberPresenting={groupMemberPresenting} />
                }
            </AnimatePresence>
            <motion.ul layout initial={{ borderRadius: 25 }}>
                <motion.li whileTap={{ scale: 0.89 }} layout onClick={() => { setIsOpen(!isOpen) } } initial={{ borderRadius: 10 }}>
                    <motion.div className="avatar" layout />
                </motion.li>
            </motion.ul>
        </AnimateSharedLayout>
    )
}