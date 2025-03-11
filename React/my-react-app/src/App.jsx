import { useEffect, useState } from 'react';


// const hasLiked = true;


const Card = ({title}) => {

  const [count , setCount] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);

  useEffect(() => {
    console.log(`${title} has been liked: ${hasLiked}`)
  }, [hasLiked])

  useEffect(() => {
    console.log('CARD RENDERED')
  }, [])

  return (
    <div className="card" onClick={() => setCount(count + 1)}>
      
      <h2>{title} <br /> {count || null}</h2>
      
      {/* <button onClick={() => setHasLiked(true)}> */}
      <button onClick={() => setHasLiked(!hasLiked)}>
        {hasLiked ? 'Unlike' : 'Like'}
      </button>
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
