import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
// import s from './Checkbox.module.scss';

// Это пример, необходимо исправить под наши параметры

export const Checkbox = () => {
  const { t } = useTranslation();
  const [checked, setChecked] = useState(false);

  const toggleCheckbox = () => {
    setChecked(!checked);
  };

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer'
      }}
      onClick={toggleCheckbox}
    >
      <div
        style={{
          width: '16px', // Увеличиваем размер плейсхолдера в 2 раза
          height: '16px', // Увеличиваем размер плейсхолдера в 2 раза
          borderRadius: '50%',
          border: '2px solid #ccc',
          backgroundColor: checked ? '#C7B4A5' : 'transparent',
          marginRight: '16px', // Увеличиваем отступ между плейсхолдером и текстом
        }}
      />
      <span style={{ color: 'white', fontSize: '12px' }}>{t("order.data_processing_agreement")}</span>
    </div>
  );
};