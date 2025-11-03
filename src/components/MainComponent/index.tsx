type MainContainerProps = {
  children: React.ReactNode;
};

const MainContainer: React.FunctionComponent<MainContainerProps> = ({ children }) => {
  return (
    <main className="bg-brutal-background text-brutal-on-background h-screen flex-1 overflow-x-hidden overflow-y-auto">
      {children}
    </main>
  );
};

export default MainContainer;
