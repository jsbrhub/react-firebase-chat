import "../../../src/components/chat/Chat.css";
import EmojiPicker from "emoji-picker-react";
import { useState } from "react";

const Chat = () => {
const [open,setOpen] = useState(false);
const [text,setText] = useState("");

const handleEmoji = e => {
    setText((prev) => prev + e.emoji);
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
            <div className="center">
                <div className="message">
                    <img src="./avatar.png" alt="" />
                    <div className="texts">
                        <p>
                        Lorem ipsum dolor sit amet. Vel dolores aperiam et culpa ducimus aut corporis nobis aut veniam aliquid ab neque alias et perspiciatis voluptas ab accusamus dicta. Sed molestiae ipsam et nihil odio id dolorum numquam est fugiat eaque eum error impedit aut odio delectus hic distinctio voluptatem.
                        </p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="message own">
                    <div className="texts">
                        <p>
                        Lorem ipsum dolor sit amet. Vel dolores aperiam et culpa ducimus aut corporis nobis aut veniam aliquid ab neque alias et perspiciatis voluptas ab accusamus dicta. Sed molestiae ipsam et nihil odio id dolorum numquam est fugiat eaque eum error impedit aut odio delectus hic distinctio voluptatem.
                        </p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="message">
                    <img src="./avatar.png" alt="" />
                    <div className="texts">
                        <p>
                        Lorem ipsum dolor sit amet. Vel dolores aperiam et culpa ducimus aut corporis nobis aut veniam aliquid ab neque alias et perspiciatis voluptas ab accusamus dicta. Sed molestiae ipsam et nihil odio id dolorum numquam est fugiat eaque eum error impedit aut odio delectus hic distinctio voluptatem.
                        </p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="message own">
                    <div className="texts">
                        <p>
                        Lorem ipsum dolor sit amet. Vel dolores aperiam et culpa ducimus aut corporis nobis aut veniam aliquid ab neque alias et perspiciatis voluptas ab accusamus dicta. Sed molestiae ipsam et nihil odio id dolorum numquam est fugiat eaque eum error impedit aut odio delectus hic distinctio voluptatem.
                        </p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="message">
                    <img src="./avatar.png" alt="" />
                    <div className="texts">
                        <p>
                        Lorem ipsum dolor sit amet. Vel dolores aperiam et culpa ducimus aut corporis nobis aut veniam aliquid ab neque alias et perspiciatis voluptas ab accusamus dicta. Sed molestiae ipsam et nihil odio id dolorum numquam est fugiat eaque eum error impedit aut odio delectus hic distinctio voluptatem.
                        </p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="message own">
                    <div className="texts">
                        <p>
                        Lorem ipsum dolor sit amet. Vel dolores aperiam et culpa ducimus aut corporis nobis aut veniam aliquid ab neque alias et perspiciatis voluptas ab accusamus dicta. Sed molestiae ipsam et nihil odio id dolorum numquam est fugiat eaque eum error impedit aut odio delectus hic distinctio voluptatem.
                        </p>
                        <span>1 min ago</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chat;