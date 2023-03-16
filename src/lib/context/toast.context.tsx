import React, {
  createContext,
  useContext,
  useCallback,
  useState,
  useEffect,
  createRef,
} from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { v4 as uuid } from 'uuid';

import { IToast, IToastContextData } from '~@types/lib/context/toast.context';
import { TToastProps } from '~@types/components/Toast';

import Toast from '~@components/Toast';

const ToastContext = createContext({} as IToastContextData);

const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  const [toastList, setToastList] = useState<IToast[]>([]);

  const removeToast = useCallback((id: string) => {
    setToastList(prevList => prevList.filter(toast => toast.id != id));
  }, []);

  const addToast = useCallback((data: TToastProps) => {
    const id = uuid();
    // setTimeout(() => removeToast(id), 5000);
    const { type, title, description } = data;

    setToastList(prevList => [...prevList, { id, type, title, description, ref: createRef() }]);

    return id;
  }, []);

  useEffect(() => {
    let timeout = 5000;

    toastList.forEach(toast => {
      if (toast.timedOut) return;

      toast.timedOut = setTimeout(() => {
        removeToast(toast.id);
      }, timeout);

      timeout += 250;
    });
  }, [removeToast, toastList]);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <TransitionGroup
        id="toast-container"
        className="fixed bottom-0 right-1/2 z-50 mx-auto flex h-0 w-full translate-x-1/2 flex-col-reverse sm:left-0 sm:right-full sm:w-fit sm:translate-x-0"
      >
        {toastList.length != 0
          ? toastList.map(toast => (
              <CSSTransition key={toast.id} nodeRef={toast.ref} timeout={500} classNames="slide">
                <Toast
                  ref={toast.ref}
                  type={toast.type}
                  title={toast.title}
                  description={toast.description}
                />
              </CSSTransition>
            ))
          : null}
      </TransitionGroup>
    </ToastContext.Provider>
  );
};

function useToast() {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }

  return context;
}

export { ToastProvider, useToast };