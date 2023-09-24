import './App.css';
import qrCodeImage from './assets/images/image-qr-code.png';

function App() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-slate-200">
      <div className="flex flex-col items-center shadow-lg p-6 max-w-xs rounded-xl bg-white">
        <img src={qrCodeImage} alt="QR Code" className="w-72" />
        <p className='text-xl font-bold text-center text-blue-950 py-2.5'>
          Improve your front-end skills by building projects
        </p>
        <p className='text-sm font-medium text-center text-slate-700'>
          Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
        </p>
      </div>
    </div>
  );
}

export default App;
