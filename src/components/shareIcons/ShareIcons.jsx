import React from "react";
import "./ShareIcons.scss";
import whatsappIcon from '../../images/whatsappIcon.png'

const ShareIcons = () => {
    return (
        <div>
            <a  href="http://Wa.me/917566904500" target="_blank">
                <i class="whats-app"><img src={whatsappIcon} class="shareImg"></img></i>
            </a>
        </div>
    )
}

export default ShareIcons;