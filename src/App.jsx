import { useState } from 'react';
import './App.css';
import Card from './components/Card';
import { mdiShuffle } from '@mdi/js';
import Input from './components/Input';




function App() {
  const [flashcard, setFlashcard] = useState(0);
  const nextCard = () => {setFlashcard((flashcard + 1)%10)}; 
  const prevCard = () => setFlashcard((flashcard <= 0 ? flashcard :  (flashcard - 1)%10));
  const shuffleCards = () => {
    FLASHCARD_INFO.sort( () => Math.random() - 0.5)
    setFlashcard(0)
  }
  const card = FLASHCARD_INFO[flashcard];
  
  return (
      <div className="App">
        <div>
          {/* <img className="banner" src={banner}/> */}
          <h1>Computer Architecture</h1>
          <h3>Test your knowledge on computer performance, RISC-V, processors, and more!</h3>
          <p>Number of Cards: 10</p>
          <Card question={card.question} answer={card.answer} key={flashcard}/>
          <Input answer={card.answer} key={new Date().getTime()} />
          <button className="prev" onClick={prevCard}>←</button>
          <button className="next" onClick={nextCard}>→</button>
          {/* <button className="shuffle" onClick={shuffleCards}><Icon path={mdiShuffle} size={1} /></button> */}
        </div>
      </div>
    )
  };

const FLASHCARD_INFO = [
    {
      id: 1,
      question: "What is the difference between latency and throughput?",
      answer: "Latency is how long is takes to do a task while throughput is the total work done per unit time."
    },
    {
      id: 2,
      question: "How does performance relate to execution time?",
      answer: "Performance = 1/Execution Time"
    },
    {
      id: 3,
      question: "A 40GHz processor has a cycle time of", 
      answer: "25s"
    },
    {
      id: 4,
      question: "Which entity translates assembly code into machine code",
      answer: "Assembler"
    },
    {
      id: 5,
      question: "The RISC-V ISA we discussed uses 32 general-purpose registers. Assume we want to increase the number of registers to 128. To enable this, the machine instruction format of three operand instructions would need to be increased by how many bits?",
      answer: "6"
    },
    {
      id: 6,
      question: "What is a pipeline?",
      answer: "A pipeline is a set of data processing elements connected in series, where the output of one element is the input of the next one"
    },
    {
      id: 7,
      question: "What is the program counter and what does it increment by?",
      answer: "The program counter is the register containing the address of the instruction in the program being executed. It increments by 4."
    },
    {
      id: 8,
      question: "Consider the code snippet below. In which memory segment does the array y reside?\nint x = 8;\nint main() {\n\tint y[64];\n\treturn 1;\n}",
      answer : "The array resides in the stack memory."
    },
    {
      id: 9,
      question:  "What are the data transfer instructions and what do they do?",
      answer : "Data transfer instructions move data to and from memory. Load moves data from a memory location to a register. Store moves data from a register to a memory location."
    },
    {
      id: 10,
      question: "Assume the following instruction sequence. How many RAW dependencies can be observed in the sequence?\nadd x1, x2, x3\nmul x2, x1, x4\nadd x1, x3, x3\nadd x4, x1, x4",
      answer: "There exist 2 RAW dependencies here."
    }
  ];


export default App