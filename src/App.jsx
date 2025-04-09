import { useState } from 'react'
import './App.css'
import Sidebar from './components/Sidebar'
import MainContent from './components/MainContent'


function App() {
  const [detailsValues, setDetailsValues] = useState("")
  const [workValues, setWorkValue] = useState("")
  const [schoolValues, setSchoolValue] = useState("")

  function valuesInput(data){
    setDetailsValues(data)
  }

  function workInput(data){
    setWorkValue(data)
  }

  function schoolInput(data){
    setSchoolValue(data)
  }


  return (
    <div className='app-container'>
      <Sidebar  detailsInput={valuesInput} workValueInput={workInput} schoolValueInput={schoolInput}/>
      <MainContent detailsValues={detailsValues} workValues={workValues} schoolValues={schoolValues}/>
    </div>
  )
}

export default App
