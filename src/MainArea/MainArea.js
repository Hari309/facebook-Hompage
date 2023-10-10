import React from "react";
import './MainArea.css';
import {FaFontAwesomeFlag,  FaAngleDown, FaUserFriends, FaSearch, FaGrin, } from 'react-icons/fa'
import {MdVideoCall, MdMoreHoriz, MdOutlineGroups2,MdOutlineTimer,MdOndemandVideo} from 'react-icons/md'
import {AiFillFileImage} from 'react-icons/ai'
import { FcLibrary } from "react-icons/fc";
function MainArea(){
    return (
        <div className="Main">
            <div className="Rside">
            <div className="Profile">
                <img src="/images/dp9.png"alt="dp"style={{height:"40px",width:"40px",padding:"1rem",}}/>
                Harish
            </div>
            <div className="Pro">
            <FaUserFriends color="blue" fontSize="1rem"/>
            <div>Friends</div>
            </div>

            <div className="Pro">
                <MdOutlineTimer color="blue" fontSize="1rem"/>
                <div>Memories</div>
            </div>

            <div className="Pro">
                <FaFontAwesomeFlag color="blue" fontSize="1rem"/>
                <div>Saved</div>
            </div>

            <div className="Pro">
                <MdOutlineGroups2 color="blue" fontSize="1rem"/>
                <div>Groups</div>
            </div>

            <div className="Pro">
                <MdOndemandVideo color="blue" fontSize="1rem"/>
                <div>Video</div>
            </div>

            <div className="Pro">
                <FcLibrary color="blue" fontSize="1rem"/>
                <div>MarketPlace</div>
            </div>

            <div className="Pro">
                <FaFontAwesomeFlag color="blue" fontSize="1rem"/>
                <div>Feeds</div>
            </div>


            <div className="Pro">
                <FaAngleDown color="Black" fontSize="1rem"/>
                <div>See More</div>
            </div>
            <br></br>
            </div>

            <div className="MainArea">
                <div className="addStory">
                    <div className="Story">
                        <img src="images\dp9.png" alt="IMG" style={{height:"50px", width:"50px",borderRadius:"50%"}}/>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        Harish
                    </div>
                    <div className="Story">
                        <img src="images\dp2.png" alt="IMG"  style={{height:"50px", width:"50px",borderRadius:"50%"}}/>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        Nemo
                    </div>
                    <div className="Story">
                        <img src="images\dp3.png" alt="IMG"  style={{height:"50px", width:"50px",borderRadius:"50%"}}/>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        Bhaskar
                    </div>
                    <div className="Story">
                        <img src="images\dp4.png" alt="IMG"  style={{height:"50px", width:"50px",borderRadius:"50%"}}/>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        
                        Vijay
                    </div>

                    </div>
                    <div className="message">
                        <div className="text">
                            <div className="Post">
                                <img src="/images/dp9.png" alt="PIC"/>
                                <input type="text" placeholder="What's on your mind, Harish?"/>
                            </div>
                            <div className="Call">
                                <div className="ico">
                                    <div className="icone">
                                        <MdVideoCall fontSize="1.7rem" color="red"/>
                                        <div>LiveVideo</div>
                                    </div>
                                    <div className="icone">
                                        <AiFillFileImage fontSize="1.2rem" color="green"/>
                                        <div>Photo/Video</div>
                                    </div>
                                    <div className="icone">
                                        <FaGrin fontSize="1.2rem" color="orange"/>
                                        <div>Felling/activity</div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className ="Lside">
             <div className="Contact">  
                 <div className="Contacts">
                     Contacts
                 </div>
             
             <div className="chaticon">
                 <div className="icons">
                     <MdVideoCall fontSize="1.5rem"/>
                 </div>
                 <div className="icons">
                        <FaSearch fontSize="1.5rem"/>
                     </div>
                     <div className="icons">
                        <MdMoreHoriz fontSize="1.6rem"/>
                     </div>
                </div>
                </div>
            <div className="concise">
                <div className="Profilee">
                    <img src="/images/dp1.png" alt="logo" style={{height:"35px", padding:"1rem"}}/>
                    Bhaskar
                </div>
                <div className="Profilee">
                    <img src="/images/dp3.png" alt="logo" style={{height:"35px", padding:"1rem"}}/>
                    Vijay
                </div>
                <div className="Profilee">
                    <img src="/images/dp5.png" alt="logo" style={{height:"35px", padding:"1rem"}}/>
                    Baswanth
                </div>
                <div className="Profilee">
                    <img src="/images/dp7.png" alt="logo" style={{height:"35px", padding:"1rem"}}/>
                    Amith
                </div>
                <div className="Profilee">
                    <img src="/images/dp8.png" alt="logo" style={{height:"35px", padding:"1rem"}}/>
                    Nemo
                </div>
            </div>
            </div>
        </div>
    )
}
export default MainArea