import { useState } from 'react'
import './App.css'
import Sidebar from './components/Sidebar'
import MainContent from './components/MainContent'


function App() {
  const [detailsValues, setDetailsValues] = useState("")
  const [workValues, setWorkValue] = useState("")
  const [schoolValues, setSchoolValue] = useState("")
  const [langValues, setLangValues] = useState("")

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
        detailsValues={detailsValues} 
        workValues={workValues} 
        schoolValues={schoolValues}
        langValues={langValues}
      />

      <MainContent 
        // Send the data to MainContent
        detailsValues={detailsValues} 
        workValues={workValues} 
        schoolValues={schoolValues}
        langValues={langValues}

        // This will get the data to Delete and Edit.
        onDeleteItem={handleDeleteItem}
      />
    </div>
  )
}

export default App
