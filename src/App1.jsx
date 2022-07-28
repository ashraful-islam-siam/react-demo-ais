import Layout from "./components/layout/Layout";
import About from "./components/pages/About";
import Help from "./components/pages/Help";
import Home from "./components/pages/Home";
const App = () => {
  return (
    <>
      <Layout>
        <Home />
      </Layout>
      <Layout>
        <About />
      </Layout>
      <Layout>
        <Help />
      </Layout>
    </>
  );
};

export default App;
