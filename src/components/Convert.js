import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Convert = ({ text, language }) => {
  const [translated, setTranslated] = useState('');
  const [debouncedText, setDebouncedText] = useState(text);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedText(text);
    }, 500);

    return () => {
      clearTimeout(timerId);
    };
  }, [text]);

  useEffect(() => {
    const doTranslation = async () => {
      try {
        const { data } = await axios.post(
          'https://translation.googleapis.com/language/translate/v2',
          {},
          {
            params: {
              q: debouncedText,
              target: language.value,
              key: 'YOUR_GOOGLE_TRANSLATE_API_KEY', // Replace with your API key
            },
          }
        );
        setTranslated(data.data.translations[0].translatedText);
      } catch (error) {
        console.error('Error translating text:', error);
      }
    };

    doTranslation();
  }, [debouncedText, language]);

  return (
    <div>
      <h3 className="ui header">{translated}</h3>
    </div>
  );
};

export default Convert;
