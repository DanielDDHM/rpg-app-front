import React, { useEffect, useState } from 'react';
import './index.css';

interface ToastProperties {
  id: number;
  title: string;
  description: string;
  backgroundColor: string;
  icon?: any;
}

interface ToastProps {
  toastList: Array<ToastProperties>;
  position: string;
}

const Toast = (props: ToastProps) => {
  const { position, toastList } = props;
  const [list, setList] = useState(toastList);

  useEffect(() => {
    setList(toastList);
  }, [toastList, list]);

  return (
    <>
      <div className={`notification-container ${position}`}>
        {list.map((toast, i) => (
          <div key={i} className={`notification toast ${position}`}>
            <button>X</button>
            <div className="notification-image">
              <img src={toast.icon} alt="" />
            </div>
            <div>
              <p className="notification-title">{toast.title}</p>
              <p className="notification-message">{toast.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default Toast;
