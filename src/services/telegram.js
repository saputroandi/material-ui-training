// https://api.telegram.org/bot1870520537:AAFoz0hpkpB3976t6jbJDkrmHgDvkzKL4G4/sendMessage?chat_id=-550574946&text=haidaribot

import axios from 'axios';

const telegramUrl = process.env.REACT_APP_TELEGRAM_URL;
const telegramGrupId = process.env.REACT_APP_GRUP_ID;
const telegramBotToken = process.env.REACT_APP_BOT_TOKEN;

// export default function handleTelegram(messages) {
//   try
//   return true;
// }

const handleTelegram = async (messages) => {
  const date = new Date();
  const textMessages = `Messages From:%0A ${messages.message}%0A----------------------------------------------------------%0A ${date}%0A-----------------------------------------------------------%0A%0A ${messages.detailMessage}`;
  try {
    await axios.get(
      `${telegramUrl}bot${telegramBotToken}/sendMessage?chat_id=${telegramGrupId}&text=${textMessages}`
    );
    return true;
  } catch (err) {
    console.log(err);
  }
};

export default handleTelegram;
