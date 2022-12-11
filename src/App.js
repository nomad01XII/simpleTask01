// import { useState, useEffect } from 'react';
import './App.css';
import Datagrid from './components/DataGrid';
import Navbar from './components/Navbar';
import Pdl from './components/Sidebar';
import AddContact from './components/AddContact';
// import { getAllContacts } from './services/contactServices';
import { Route, Routes, } from "react-router-dom";



const App = () => {


  // const [tableData, setTableData] = useState([])
  // const [FilteredContacts, setFilteredContacts] = useState([])
  // const [query, setQuery] = useState({ text: '' });



  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const { data: contactsData } = await getAllContacts();

  //       setFilteredContacts(contactsData);
  //       setTableData(contactsData);
  //     } catch (err) {
  //       console.log(err.message)
  //     }
  //   }
  //   fetchData()

  // }, [tableData])

  // const contactSearch = (event) => {
  //   setQuery({ ...query, text: event.target.value });
  //   const allContacts = tableData.filter((item) => {
  //     return item.name.toLowerCase().includes(event.target.value.toLowerCase());
  //   });

  //   setFilteredContacts(allContacts);
  // };




  return (
    <div className="App">
      <Navbar
      //  query={query} search={contactSearch}
        />
      <Pdl />
      {/* {tableData && <Datagrid tableData={FilteredContacts} contacts={FilteredContacts} />} */}
      <Datagrid />
      <Routes>
        <Route path="/contacts/add" element={<AddContact />}
        />
      </Routes>

    </div>
  );
};

export default App;
