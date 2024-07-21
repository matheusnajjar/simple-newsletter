const Form = () => {
  return (
    <form>
      <div>
        <label>Name</label>
        <input type="text" placeholder="Insert your name" />
      </div>
      <div>
        <label>E-mail</label>
        <input type="email" placeholder="Insert your best e-mail" />
      </div>
      <div>
        <a href="#">Read the terms</a>
        <div>
          <input id="checkbox" type="checkbox" />
          <label htmlFor="checkbox">Agree with terms</label>
        </div>
      </div>
      <button>Register</button>
    </form>
  );
};

export default Form;
