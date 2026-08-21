import ProfileHeader from './components/ProfileHeader';
import SkillList from './components/SkillList';
import Footer from './components/Footer';

function App() {
  const name = "Augusto Páez";
  const phrase = "Desarrollador Web en formación | Apasionado por la tecnología";

  const handleGreetingClick = () => {
    alert(`¡Gracias por visitar mi presentación personal, de parte de ${name}!`);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 p-4 sm:p-8 font-sans">
      <main className="max-w-2xl mx-auto">
        <ProfileHeader name={name} phrase={phrase} />

        <div className="text-center my-6">
          <button
            type="button"
            onClick={handleGreetingClick}
            className="bg-indigo-600 hover:bg-indigo-500 text-white font-medium px-5 py-2.5 rounded-lg shadow transition-colors cursor-pointer"
          >
            Saludar
          </button>
        </div>

        <SkillList />
        <Footer name={name} />
      </main>
    </div>
  );
}

export default App;