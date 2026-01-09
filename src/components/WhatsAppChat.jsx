import { FaWhatsapp } from "react-icons/fa";

const WhatsAppChat = () => {
  return (
    <a
      href="https://wa.me/918121234#41"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 w-10 h-10 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-transform hover:scale-110"
    > 
     <FaWhatsapp className="text-2xl" />
    </a>
  );
};

export default WhatsAppChat;
