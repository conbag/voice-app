import React from "react";
import Iframe from "react-iframe";
import "./App.css";

import SpeechRecognition from "react-speech-recognition";
import SearchField from "react-search-field";
import { FaMicrophone } from 'react-icons/fa';

const options = {
  autoStart: false,
  continuous: false
};

class App extends React.Component {
  
  startRecording = () => {

  }

  render() {
    const { startListening, transcript, finalTranscript } = this.props;
    const command = finalTranscript.split(' ');

    return (
      <div className="App">
        <div className="App-body">
          <div className="search">
            <SearchField
              placeholder="Search..."
              searchText={transcript}
              classNames="test-class"
            />
            <button onClick={startListening}><FaMicrophone /></button>
          </div>
          {finalTranscript.length > 0 && <div className="website">
            {((command[0] + command[1]) === 'IFCsearch') ? (
              <Iframe
                url={(command[1] === 'search') &&
                  "https://institutional.fidelity.com/app/search/results/all?limit=20&offset=0&fromLookAhead=false&query=" +
                  command.slice(2).join(' ')
                }
                width="100%"
                height="100%"
                id="myId"
                className="myClassname"
                display="initial"
                position="relative"
              />
            ) : <div>This command is not recogised</div>}
          </div>}
        </div>
      </div>
    );
  }
}

export default SpeechRecognition(options)(App);
