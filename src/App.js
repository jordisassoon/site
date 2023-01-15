import './App.css';
import React, {useState} from 'react';
import OptionHolder from './components/optionHolder';
import Me from './components/paragraphs/me';
import Projects from './components/paragraphs/projects';
import Travels from './components/paragraphs/travels';
import Contacs from './components/paragraphs/contacts';

function App() {

  const [page, setPage] = useState(<Me></Me>);

  const me = <Me></Me>;
  const projects = <Projects></Projects>;
  const travels = <Travels></Travels>;
  const contacts = <Contacs></Contacs>;
  
  const handleClick = event => {
    switch (event.currentTarget.id) {
        case "me":
          setPage(me);
          break;
        case "projects":
          setPage(projects);
          break;
        case "travels":
          setPage(travels);
          break;
        case "contacts":
          setPage(contacts);
          break;
    }
  }

  return (
    <div className="App-header flex-container">
      <div className="options">
        <div id="me" onClick={handleClick}>
          <OptionHolder text="me"></OptionHolder>
        </div>
        <div id="projects" onClick={handleClick}>
          <OptionHolder text="projects"></OptionHolder>
        </div>
        <div id="travels" onClick={handleClick}>
          <OptionHolder text="travels"></OptionHolder>
        </div>
        <div id="contacts" onClick={handleClick}>
          <OptionHolder text="contacts"></OptionHolder>
        </div>
      </div>
      <div className='paragraph'>
        {page}
      </div>
    </div>
  );
}

export default App;
