import Header from '../Header/Header';
import './App.css';
import Counter from '../States/Counter'
import CaculateArea from '../States/CaculateArea'
import CameraList from '../States/Camaralist'

function App() {
  return (
    <div>
      <h1>Ứng dụng đếm số</h1>
      <Counter />
      <div>
        <h2>Tính diện tích dm</h2>
        <CaculateArea></CaculateArea>
      </div>
      <div>
        <CameraList></CameraList>
      </div>
    </div>
  );
}

export default App;
