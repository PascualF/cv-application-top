import { useState } from 'react'
import './App.css'
import Sidebar from './components/Sidebar'
import MainContent from './components/MainContent'


function App() {
  const [detailsValues, setDetailsValues] = useState("")
  const [workValues, setWorkValue] = useState("")
  const [schoolValues, setSchoolValue] = useState("")
  const [langValues, setLangValues] = useState("")

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
      <Sidebar  detailsInput={valuesInput} workValueInput={workInput} schoolValueInput={schoolInput} langValueInput={langInput}/>
      <MainContent detailsValues={detailsValues} workValues={workValues} schoolValues={schoolValues} langValues={langValues}/>
    </div>
  )
}

export default App
