import './App.css';
import backgroud from './Assets/hero.jpg'
import logo from './Assets/logo-white.png'

function App() {
  return (
    <div>


      <div 
      style={{
        backgroundImage: `linear-gradient( rgba(0, 01, 0, 0.7), rgba(0, 0, 0, 0.7) ), url(${backgroud})`,
      }}
        className='background'
      >
         <div className='navbar_container'>
            <div className='logo'>
              <img src={logo} alt='Logo' />
            </div>
            <div className='links'>
                <div className='link'>Food delivery</div>
                <div className='link'>How it works</div>
                <div className='link'>Our City</div>
                <div className='link'>Sign up</div>
            </div>
         </div>
      
        <div className='text_container'>
          <p>
            GOODBYE JUNK FOOD. <br/>
            HELLO SUPER HEALTHY MEALS.
          </p>
          <div className='btn_group'>
            <button className='btn_hungary'>I'm Hungary </button>
            <button className='btn_more'>Show me more</button>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
