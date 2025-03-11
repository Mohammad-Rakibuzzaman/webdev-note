

const Card = ({title}) => {
  return (
    <div className="card">
      <h2>{title}</h2>
    </div>
  )
}



//2 types of components we can write in react

//class components (traditional)
// class ClassComponent extends React.Component {
//   render() {
//     return <h1>Class Component</h1>
//   }
// }

//functional component (modern)
// function App() {

// }

const App = () => {
  return  (
    <>
      <div className="card-container">
        {/* <Card title="Dragon Ball Z" rating={5} isCool={true} actors={[{ name: 'Actors'}]} /> */}
        <Card title="Dragon Ball Z" rating={5} isCool={true} />
        <Card title="Hunter X Hunter" />
        <Card title="Bleach" />


      </div>

    </>
    
  )

}

export default App
