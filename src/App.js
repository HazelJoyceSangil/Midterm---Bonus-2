import './App.css';

function Sangil({ display }) {
  return (
    <div className='Sangil'>
      {display}
    </div>
  );
}

function Sangil2() {
  return (
    <div className="Sangil2">
      <div className="top">
        <div className='topcolumn'>
          <div class="item1">1</div>
          <div class="item2">2</div>
        </div>
        <div class="item3">3</div>
        <div class="item4">4</div>
      </div>

      <div className="bottom">
        <div class="item5">5</div>
        <div class="item6">6</div>
        <div class="item7">7</div>
        <div class="item8">8</div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <Sangil display="Hazel Sangil"/>
      <Sangil2/>
    </div>
  );
}