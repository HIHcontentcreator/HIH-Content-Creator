import ContentForm from "./components/ContentForm";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-100 to-gray-300 p-4">
      <h1 className="text-4xl font-bold text-center text-blue-700 my-6">
        HIH Content Creator
      </h1>
      <ContentForm />
    </div>
  );
}

export default App;
