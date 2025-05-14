import { useEffect } from 'react';

declare global {
  interface Window {
    BrevoConversationsID: string;
    BrevoConversations: (...args: any[]) => void;
  }
}

const BrevoChat = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.innerHTML = `
      (function(d, w, c) {
        w.BrevoConversationsID = '68231877b68da1ec290688b8';
        w[c] = w[c] || function() {
          (w[c].q = w[c].q || []).push(arguments);
        };
        var s = d.createElement('script');
        s.async = true;
        s.src = 'https://conversations-widget.brevo.com/brevo-conversations.js';
        if (d.head) d.head.appendChild(s);
      })(document, window, 'BrevoConversations');
    `;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null;
};

export default BrevoChat;