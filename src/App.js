import './App.css';
import BasicTable from './components/BasicTable'
import EditUser from './components/EditUser'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Router>
      <Navbar/>
      <Routes>
        <Route exact path= "/" element={<BasicTable />}/>
        <Route exact path= "/addUser" element={<AddUsers/>}/>
        <Route exact path= "/edituser/:user_id" element={<EditUser />}/>
        <Route exact path="/viewuser/:user_id" element={<ViewUser/>} />
      </Routes>
      </Router>
        
      </header>
    </div>
  );
}

export default App;
