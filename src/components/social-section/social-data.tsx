import { JSX } from "react";
import { FaFacebookF, FaLinkedinIn, FaYoutube , FaWhatsapp, FaInstagram, FaPinterestP } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

type SocialType = {
    name: string;
    icon: string | JSX.Element;
    url: string;
    style: string;
 }

const Social : SocialType[] = [
    {
        name: "Linkedin",
        icon: <FaLinkedinIn className="text-3xl"/>,
        url: "https://www.linkedin.com/",
        style: "hover:bg-[#0077b5]"
    },
    {
        name: "Facebook",
        icon: <FaFacebookF className="text-3xl"/>,
        url: "https://www.facebook.com/",
        style: "hover:bg-[#3b5998]"
    },
    {
        name: "X (Twitter)",
        icon: <FaXTwitter className="text-3xl"/>,
        url: "https://twitter.com/",
        style: "hover:bg-[#030303]"
    },
    {
        name: "Youtube",
        icon: <FaYoutube className="text-3xl"/>,
        url: "https://www.youtube.com/",
        style: "hover:bg-[#ff0000]"
    },
    {
        name: "Whatsapp",
        icon: <FaWhatsapp className="text-3xl"/>,
        url: "https://www.whatsapp.com/",
        style: "hover:bg-[#25d366]"
    },
    {
        name: "Instagram",
        icon: <FaInstagram className="text-3xl"/>,
        url: "https://www.instagram.com/",
        style: "hover:bg-[#c13584]"
    },
    {
        name: "Pinterest",
        icon: <FaPinterestP className="text-3xl"/>,
        url: "https://www.pinterest.com/",
        style: "hover:bg-[#bd081c]"
    },

]

export default Social;