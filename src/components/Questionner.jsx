import { addDoc, collection, getDocs, deleteDoc, doc } from "firebase/firestore";

import { db } from "./FirebaseBd";
import toast, { Toaster } from 'react-hot-toast';
import { useEffect, useState } from "react";

function Questionner() {

  const deleteDocument = async (id) => {
    try {
      await deleteDoc(doc(db, "users", id));
      toast.success('Successfully deleted document!', id);
    } catch (error) {
      alert(error.message);
    }
  };
  


  
  



  
  const [users, setUsers] = useState([]);
  const fetchPost = async () => {
    await getDocs(collection(db, "users")).then((snapchot) => {
      const newData = snapchot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setUsers(newData);
      console.log(users, newData);
    });
  };
  useEffect(() => {
    fetchPost();
  });





  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const docRef = await addDoc(collection(db, "users"), {
        name: name,
        email: email,
        message: message,
      });
      
      toast.success('Successfully toasted!', docRef.id);
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="container p-5 w-50 mt-5">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
          what is your favorite framework web
          </label>
          <input type="text" className="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)} />
          <p><b>ex:</b> <span className="textS"> AngularJS - Symfony - Django - Laravel - ASP.NET</span></p>
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
          what is your favorite programming language
          </label>
          <input type="text" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <p><b>ex:</b> <span className="textS"> Python - Java - JavaScript - C++ - C#</span></p>
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">
          what was your first programming language 
          </label>
          <input className="form-control " type="text" id="message"  value={message} onChange={(e) => setMessage(e.target.value)}></input>
          <p><b>ex:</b> <span className="textS"> AngularJS - Symfony - Django - Laravel - ASP.NET</span></p>
        </div>
        <button type="submit" className="btn fw-bold">
          Submit
        </button>
      </form>
      <div>
      <h1 className="mt-5">Users:</h1>
      <ul>
        {users.map((user) => (
          <div className="card my-3 px-3 py-3" style={{width: "18rem"}} key={user.id}>
            <p>framework:{user.name}</p>
            <p>programming language:{user.email}</p>
            <p>programming language:{user.message}</p>
            <button className="btn btn-danger btn-sm" onClick={() => deleteDocument(user.id)}>Delete</button>
            
          </div>
        ))}
      </ul>
    </div>
    <Toaster
  position="top-center"
  reverseOrder={false}
/>
    </div>
  );
}

export default Questionner;
