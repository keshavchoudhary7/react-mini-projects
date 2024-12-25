import Header from "./components/Header";
import { Posts } from "./components/posts";


function App() {
  return (
    <>
      <section className="mainSection min-h-screen">
        <Header />
        <div className="p-6">
          <Posts />
        </div>
      </section>
    </>
  );
}

export default App;
