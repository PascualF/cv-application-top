import { useState } from 'react'
import './App.css'
import Sidebar from './components/Sidebar'
import MainContent from './components/MainContent'


function App() {

  const [detailsValues, setDetailsValues] = useState({})
  const [workValues, setWorkValue] = useState([])
  const [schoolValues, setSchoolValue] = useState([])
  const [langValues, setLangValues] = useState([])

  const [itemBeingEdited, setItemBeingEdited] = useState("");



  const handleDeleteItem = (index, type) => {
    if(type === "work") {
      const updated = [...workValues];
      updated.splice(index, 1);
      setWorkValue(updated)
    } else if(type === "school") {
      const updated = [...schoolValues];
      updated.splice(index, 1);
      setSchoolValue(updated)
    } else if (type === "lang") {
      const updated = [...langValues];
      updated.splice(index, 1);
      setLangValues(updated)
    } 
  }

  const handleEditItem = ( index, type) => {
    if(type === "work") {
      const itemToEdit = workValues[index];
      setItemBeingEdited({
        data: itemToEdit,
        index,
        type
      })
    } else if (type === "school") {
      const itemToEdit = schoolValues[index];
      setItemBeingEdited({
        data: itemToEdit,
        index,
        type
      })
    } else if (type === "lang") {
      const itemToEdit = langValues[index];
      setItemBeingEdited({
        data: itemToEdit,
        index,
        type
      })
    }
  }

  function valuesInput(data){
    setDetailsValues(data)
  }

  function workInput(data){
    setWorkValue(data)
  }

  function schoolInput(data){
    setSchoolValue(data)
  }

  function langInput(data) {
    setLangValues(data)
  }

  return (
    <div className='app-container'>
      <Sidebar  
        // Get the data from the Sidebar
        detailsInput={valuesInput} 
        workValueInput={workInput} 
        schoolValueInput={schoolInput} 
        langValueInput={langInput}
        
        // This will send the updated data to the right components. 
        // Work to be edited
        itemToEdit={itemBeingEdited}


        schoolValues={schoolValues}
        langValues={langValues}
        detailsValues={detailsValues}
      />

      <MainContent 
        // Send the data to MainContent
        detailsValues={detailsValues} 
        workValues={workValues} 
        schoolValues={schoolValues}
        langValues={langValues}

        // This will get the data to Delete and Edit.
        onDeleteItem={handleDeleteItem}
        onEditItem={handleEditItem}
      />
    </div>
  )
}

export default App
