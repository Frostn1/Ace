import '../css/style.css';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import About from './About'

const home = () => {
    return (
    <body>
      <link rel="stylesheet" type="text/css" href="style.css"></link>
      <Route path='/about' component={About} />
      <h1>Hey there</h1>
  </body>
    );
}

export default home;