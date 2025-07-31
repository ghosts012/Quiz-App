
import Header from "./shared/components/Header";
import Footer from "./shared/components/Footer";
import AppRoutes from "./shared/routes/AppRoutes";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 px-4 py-6">
        <AppRoutes />
      </main>

      <Footer />
    </div>
  );
};

export default App;