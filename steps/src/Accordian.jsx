 import React from 'react'
import ReactDOM from 'react-dom'
import './App.css'
import {useState} from 'react'


const items = [
  {
    id: 1,
    question: 'Where are these chairs assembled ?',
    answer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ipsam esse tempore quam officiis commodi? Doloribus repellendus deserunt nemo harum.',
  },
  {
    id: 2,
    question: 'How long do I have to return my chair ?',
    answer:
      'You have 30 days to return your chair as long as it is in perfect condition.',
  },
  {
    id: 3,
    question: 'Do you ship to countries outside the EU ?',
    answer: 'Yes, we ship worldwide. Shipping costs depend on your location.',
  },
]

export default function Accordian() {
  return (
    <div>
      <Acc item={items} />
    </div>
  )
}

function Acc({item}) {
    const [curOpen , setCurOpen ] = useState(null) //1
  return (
    <div>
      {item.map((ele, i) => (
        <AccordianItems
        curOpen={curOpen}
        setCurOpen={setCurOpen}
          key={ele.id}
          question={ele.question}
      
          num={i}
        >
            {ele.answer}
        </AccordianItems>
      ))}
    </div>
  )
}

function AccordianItems({question, num , curOpen , setCurOpen , children}) {

  const IsOpen = num === curOpen   /// true ;


  function handleToggle() {
    setCurOpen(IsOpen ? null : num)
  }

  return (
    <div
      className={`accordianitems ${IsOpen ? 'open' : ''}`}
      onClick={handleToggle}
    >
      <div className="header">
        <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
        <h3 className="question">{question}</h3>
        <p className="icon">{IsOpen ? '-' : '+'}</p>
      </div>
      <span>{IsOpen && children}</span>
    </div>
  )
}
