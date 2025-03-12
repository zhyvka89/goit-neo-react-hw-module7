import { text } from "./Notification.module.css";

function Notification({children}) {
  return (
    <div className={text}>{children}</div>
  )
}

export default Notification