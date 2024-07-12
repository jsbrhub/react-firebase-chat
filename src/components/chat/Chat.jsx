import "../../../src/components/chat/Chat.css";
import EmojiPicker from "emoji-picker-react";
import { useState } from "react";

const Chat = () => {
const [open,setOpen] = useState(false);
const [text,setText] = useState("");

const handleEmoji = e => {
    setText((prev) => + e.emoji);
    setOpen(false)
}

    return (
        <div className="chat">
            <div className="top">
                <div className="user">
                    <img src="./avatar.png" alt="" />
                    <div className="texts">
                        <span>Jane Doe</span>
                        <p> testesdifj aisdjfi iasjdf ites tes inluis </p>
                    </div>
                </div>
                <div className="icons">
                    <img src="./phone.png" alt="" />
                    <img src="./video.png" alt="" />
                    <img src="./info.png" alt="" />
                </div>
            </div>
            <div className="center"></div>
            <div className="bottom">
                <div className="icons">
                    <img src="./img.png" alt="" className="" />
                    <img src="./camera.png" alt="" className="" />
                    <img src="./mic.png" alt="" className="" />
                </div>
                <input 
                    type="text" 
                    placeholder="type a message..."
                    value={text}
                    onChange={(e) => setText(e.target.value)} />
                <div className="emoji">
                    <img 
                        src="./emoji.png" 
                        alt="" 
                        onClick={() => setOpen((prev) => !prev)}
                    />
                    <EmojiPicker open={open} onEmojiClick={handleEmoji}/>
                </div>
                <button className="sendbutton">Send</button>
            </div>
        </div>
    )
}

export default Chat;