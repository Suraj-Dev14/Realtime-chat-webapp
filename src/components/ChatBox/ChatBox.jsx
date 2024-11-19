import './ChatBox.css'
import assets from "../../assets/assets";
import { GoDotFill } from 'react-icons/go';
import { IoIosInformationCircleOutline } from 'react-icons/io';
import { GrGallery } from 'react-icons/gr';
import { FiSend } from 'react-icons/fi';

function ChatBox() {
  return <div className='chat-box'>
    <div className="chat-user">
      <img src={assets.Photo} alt="" />
      <p>Suraj Gaikwad <GoDotFill className='chat-user-green-dot'/></p>
      <IoIosInformationCircleOutline className='help'/>
    </div>

    <div className="chat-msg">
      <div className="s-msg">
        <p className="msg">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, quibusdam.</p>
        <div>
          <img src={assets.Photo} alt="" />
          <p>2:30</p>
        </div>
      </div>

      <div className="s-msg">
        <img className='msg-img' src={assets.Photo} alt="" />
        <div>
          <img src={assets.Photo} alt="" />
          <p>2:30</p>
        </div>
      </div>

      <div className="r-msg">
        <p className="msg">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, quibusdam.</p>
        <div>
          <img src={assets.Photo} alt="" />
          <p>2:30</p>
        </div>
      </div>
    </div>

    <div className="chat-input">
      <input type="text" placeholder='Send a message' />
      <input type="file" id='image' accept="image/png, image/jpeg" hidden/>
      <label htmlFor="image">
        <GrGallery className='gallery'/>
      </label>
      <FiSend className='sendButton'/>
    </div>
  </div>;
}

export default ChatBox;
