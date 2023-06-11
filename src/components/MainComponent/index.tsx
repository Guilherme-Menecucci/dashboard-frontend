import clsx from 'clsx';

type MainContainerProps = {
  children: React.ReactNode;
  className?: string;
};

const MainContainer: React.FunctionComponent<MainContainerProps> = ({ children, className }) => {
  return (
    <main
      className={clsx(
        'h-screen flex-1 overflow-y-auto overflow-x-hidden bg-brutal-background text-brutal-on-background',
        className,
      )}
    >
      {children}
    </main>
  );
};

export default MainContainer;
