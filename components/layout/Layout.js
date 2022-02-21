import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <section className="w-11/12 md:w-4/5 mx-auto flex flex-col justify-start items-center">
      <Header />
      <main className="w-full">{children}</main>
    </section>
  );
};

export default Layout;
