import './App.css';
import Nav from './components/nav';
import CardForm from './components/cardForm';
import Footer from './components/footer';

const initState = {
  accounts : [
          {
            id: 1,
            customerName:"Israa Othman",
            accountNumber: "123456",
            accountType: "Savings"
          },
          {
            id: 2,
            customerName:"Ahmad Zahran",
            accountNumber: "987654",
            accountType: "Student accounts"
          }
  ]


}
function App(){
    return (
    <>
    <Nav/>
    <Footer/>
    <CardForm/>
   
    </>
  )
}

export default App;
