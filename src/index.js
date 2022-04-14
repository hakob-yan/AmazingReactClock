const Container = () => {
  let [time, setTime] = React.useState(new Date());

  React.useEffect(() => { setInterval(() => setTime(new Date()), 1000) }, [])
  const style = {
    position: 'relative',
    backgroundColor: "#2f363e",
    boxShadow: '25px 25px 75px rgba(0,0,0,0.75),10px 50px 70px rgba(0,0,0,0.25), inset 5px 5px 10px rgba(0,0,0,0.5),inset 5px 5px 20px rgba(0,0,0,0.2),inset -5px -5px 20px rgba(0,0,0,0.75)',
    borderRadius: '50%',
    borderTopLeftRadius: '225px',
    borderTopRightRadius: '225px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  }
  return <div className="container" style={style}>
    <Clock time={time} />
    <DigitalClock time={time} />
  </div>
}

const DigitalClock = (props) => {
  const style = {
    display: 'flex',
    marginBottom: '40px',
    padding: '10px 20px',
    fontSize: '2em',
    fontWeight: '600',
    borderRadius: '40px',
    letterSpacing: '3px',
    boxShadow: '5px 5px 10px rgba(0,0,0,0.5),inset 5px 5px 20px rgba(255,255,255,0.2)',
    border: '2px solid rgba(0,0,0,0.5)',

  };
  const style_div1 = {
    position: 'relative',
    width: '70px',
    textAlign: 'center',
    color: '#04fc43',
    boxShadow: '0px 0px 10px rgba(4, 252, 67, 0.7)',
    borderRadius: '20px',
    margin: '10px'
  }
  const style_div2 = {
    position: 'relative',
    width: '70px',
    textAlign: 'center',
    color: '#04fc43',
    boxShadow: '0px 0px 10px rgba(4, 252, 67, 0.7)',
    borderRadius: '20px',
    margin: '10px'
  };
  const style_div3 = {
    position: 'relative',
    width: '70px',
    textAlign: 'center',
    color: '#04fc43',
    boxShadow: '0px 0px 10px rgba(4, 252, 67, 0.7)',
    borderRadius: '20px',
    margin: '10px'
  }
  let hour = props.time.getHours();
  let minute = props.time.getMinutes();
  let second = props.time.getSeconds();
  const isZero = (data) => { if (data / 10 < 1) return '0' + data; return data };
  return <div style={style}>
    <div style={style_div1}>{isZero(hour)}</div>
    <div style={{ margin: '10px', color: '#04fc43' }}>:</div>
    <div style={style_div2}>{isZero(minute)}</div>
    <div style={{ margin: '10px', color: '#04fc43' }}>:</div>
    <div style={style_div3}>{isZero(second)}</div>
  </div>
}



const Clock = (props) => {
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const map = (elem, index, arr) => {
    return <span key={elem} style={{
      "--i": elem,
      position: "absolute",
      inset: "20px",
      color: "#fff",
      textAlign: "center",
      transform: "rotate(calc(30deg*var(--i)))",
    }}><b style={style_span_b} >{elem}</b></span>
  };
  const style = {
    position: 'relative',
    width: '450px',
    height: '450px',
    backgroundColor: "#2f363e",
    borderRadius: '50%',
    boxShadow: '10px 50px 70px rgba(0,0,0,0.25), inset 5px 5px 10px rgba(0,0,0,0.5),inset 5px 5px 20px rgba(0,0,0,0.2),inset -5px -5px 20px rgba(0,0,0,0.75)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '30px'
  }
  const style_span_b = {
    fontSize: '2em',
    opacity: '0.25',
    fontWeight: '600',
    display: 'inline-block',
    transform: 'rotate(calc(-30deg*var(--i)))'
  }
  const style_circle = {
    position: 'absolute',
    width: '300px',
    height: '300px',
    border: '2px solid rgba(0,0,0,0.25)',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    '--clr': '#04fc43',
    transform: 'rotateZ(' + (props.time.getSeconds()) * 6 + 'deg)',
    boxShadow: '10px 50px 50px rgba(0,0,0,0.4), inset 5px 5px 10px rgba(0,0,0,0.5),inset 5px 5px 50px rgba(0,0,0,0.1),inset -5px -5px 20px rgba(0,0,0,0.1)',

  }
  const style_circle2 = {
    position: 'absolute',
    width: '240px',
    height: '240px',
    border: '2px solid rgba(0,0,0,0.25)',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    '--clr': '#fee800',
    transform: 'rotateZ(' + (props.time.getMinutes() + props.time.getSeconds() / 60) * 6 + 'deg)'
  }

  const style_circle3 = {
    position: 'absolute',
    width: '180px',
    height: '180px',
    border: '2px solid rgba(0,0,0,0.25)',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    '--clr': '#ff2972',
    transform: 'rotateZ(' + (props.time.getHours() + props.time.getMinutes() / 60) * 30 + 'deg)'

  }
  const circle_i = {
    position: 'absolute',
    width: '6px',
    height: '50%',
    backgroundColor: '#f00',
    alignItems: 'flex-start',
    backgroundColor: 'var(--clr)',
    opacity: '0.75',
    transformOrigin: 'bottom',

    zndex: '10'
  }
  const circle_i1 = {
    zIndex: '9',
    width: '3px',
    transform: 'scaleY(0.8)',
  }
  const circle_i2 = {
    zIndex: '11',
    width: '6px',
    transform: 'scaleY(0.75)',
  }
  const circle_i3 = {
    zIndex: '10',
    width: '6px',
    transform: 'scaleY(0.635)',
  }
  const style_clock = {
    color: 'var(--clr)',
    fontSize: '10px',
    position: 'absolute',
    height: '47%',
    transformOrigin: 'bottom',
    fontSize: '7px', marginTop: '9px',

  }
  const circle1 = { ...circle_i, ...circle_i1, };
  const circle2 = { ...circle_i, ...circle_i2 };
  const circle3 = { ...circle_i, ...circle_i3 };



  let createArr = () => {
    let arr = [];
    for (let i = 1; i < 61; ++i) { arr.push(6 * i) };

    const numbers = (elem, index, arr) => {
      const dateNew = new Date();

      dateNew.setSeconds(props.time.getSeconds() + elem / 6);
      return <b key={elem} style={{ ...style_clock, ...{ transform: 'rotateZ(' + (elem) + 'deg)', opacity: (dateNew.getSeconds() - 1) < new Date().getSeconds() ? 1 : 0.06, } }}>
        {dateNew.getSeconds()}
      </b>
    };
    let elementArr = arr.map(numbers);
    return elementArr
  };















  return <div className="clock" style={style}>
    <div className="circle circle1" style={style_circle}>
      <i style={circle1}></i>
      {createArr()}
    </div>


    <div className="circle circle2" style={style_circle2}><i style={circle2}></i><b style={{ ...style_clock, ...{ fontSize: '12px', marginTop: '9px', } }}>{props.time.getMinutes()}</b></div>
    <div className="circle circle3" style={style_circle3}><i style={circle3}></i><b style={{ ...style_clock, ...{ fontSize: '12px', marginTop: '9px', } }}>{props.time.getHours()}</b></div>
    <div >{nums.map(map)}</div>

  </div>
}




ReactDOM.render(
  <Container />,
  document.getElementById("root")
)