import Form from './components/Form';

function App() {
  return (
    <div className="bg-slate-900 min-h-screen w-full flex flex-col items-center justify-center">
      <h1 className="font-bold text-[2rem] text-white">Subscribe</h1>
      <p className="text-white">Sign up for our newsletter and stay tuned</p>
      <div className="w-96 mt-4 bg-stone-200 px-4 py-5 rounded-lg">
        <Form />
      </div>
      <p className="text-slate-100 text-xs w-96 mt-2 text-center">
        When you sign up, you will receive our emails with the best tips, offers
        and news.
      </p>
    </div>
  );
}

export default App;
