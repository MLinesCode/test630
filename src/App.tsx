import './App.css'
import SearchInput from './components/SearchInput'

function App() {
  const handleSearch = (query: string) => {
    console.log('Searching for:', query);
    // Aquí puedes implementar la lógica de búsqueda con la query proporcionada
  };

  return (
    <>
      <input type="text" placeholder='Selec your city' />
      <button>Search</button>
    </>
  )
}

export default App
