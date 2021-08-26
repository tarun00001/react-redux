
import './App.css';
import Login from './components/Login';
import {connect} from 'react-redux'
import {action,addWish} from './actions/myaction'

function App(props) {
  const mywish = props.mywish.map(item => {
    return<h2 key={Math.random}>{item}</h2>
  })
  console.log(props)
  return (
    <div className="App">
        <h1>i am app component</h1>
        <h1>my name is {props.myname}</h1>
        {mywish}
        <button type="submit" onClick={() => {props.changeName()}}>Change it</button>
        <button type="submit" onClick={() => {props.addWish()}}>Add Wish</button>
    </div>
  );
}

const mapStateToProps = (state) => {  
  return {  
    myname: state.name,
    mywish: state.wish,
  }
}

const mapDispatchToProps = (dispatch) => {  
  return { 
    changeName: () => {  
      dispatch(action())
    },
    addWish: () => {
      dispatch(addWish())
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
