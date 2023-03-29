// import logo from './logo.svg';
// import './App.css';

function App() {
  return (
    <h1> HELLO WORLD</h1>
  );
}

function Profile() {
  return (
    <img
      src="https://i.imgur.com/MK3eW3As.jpg"
      alt="Katherine Johnson"
    />
  );
}
function Gallery() {
  return (
    <section>
      <h1>Amazing scientists</h1>
      <Profile />
      <Profile />
      <Profile />
     </section> 
  );
}
// export default App;
export{Gallery}

