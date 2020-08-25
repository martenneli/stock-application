import React,{useState} from 'react';
import './App.css';

function App() {
  const [value,setValue] = useState("")
  const [result,setResult] = useState([])
  const num = 40
  const fetchimages = () =>{
    fetch(`https://api.unsplash.com/search/photos/?client_id=R7VPch_bQ4Ysz6HOuqqYJOtlNV_casBdMgfnbB31Z9s&query=${value}&orientation=squarish&per_page=${num}`)
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      setResult(data.results)
    })
  }

  return (
    <div className="App">
      <header>
        <div className="main-title">
          <h2> ❝ Real Stock ᵐᵃᵈᵉ ʷᶦᵗʰ <span>💕</span> ❞ </h2>
        </div>
      </header>
      
      <div className="search-bar">
          <input type="text" id="search" value={value} onChange={ (e) =>setValue(e.target.value) } placeholder="what is in your mind"></input>
          <button type="submit" onClick={()=>fetchimages()}>
            <span>
              <svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-search" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"/>
                <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
              </svg>
            </span>
          </button>
      </div>
    
      <div className="row">
          {
            result.map((item)=>{
              return <img key={item.id} className="img" src={item.urls.regular}/>
            })
          }
          <div className="items">
          </div>
      </div>

      <header>
        <div className="main-title">
          <h2> ❝ Made by Martenneli savarin ❞ </h2>
        </div>
      </header>

    </div>
  );
}

export default App;
