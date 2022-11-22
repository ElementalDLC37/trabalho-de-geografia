import { motion } from "framer-motion"

export default function GroupMemberContent({ groupMemberPresenting, isOpen }) {

    return (
        <motion.div className="group-member-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >    
            <div className="group-member-content-container">{groupMemberPresenting.container}</div>
        </motion.div>
    )
}