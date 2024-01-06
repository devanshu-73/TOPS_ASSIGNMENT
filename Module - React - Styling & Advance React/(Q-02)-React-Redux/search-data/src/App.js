import { useEffect, useState } from "react";
import axios from "axios";
// importing neccessary dependencies

function App() {
  // fetching the data on initial render
  useEffect(() => { fetch() }, []);

  // for storing the api data
  const [data, setData] = useState([]);

  // function for fectching the data
  const fetch = async () => {
    try {
      const res = await axios.get("http://localhost:3000/product");
      const data = res.data;
      setData(data);
    } catch (err) {
      console.log(err);
    }
  };

  const [value, setValue] = useState();

  // onChange
  const handleChange = (e) => {
    setValue(e.target.value);
    fetch();
  };

  // search bar
  const handleSearch = (e) => {
    e.preventDefault();
    if (value) {
      // filtering the data
      const newData = data.filter(val => val.name.includes(value));
      setData(newData);
    }
  };

  return (
    <>
      <div className="container m-5">
        {/* heading */}
        <h2>Search Data</h2>
        <br />
        {/* search-bar */}
        <div>
          <button className="float-left btn btn-primary m-1" onClick={fetch}><i className="fa-solid fa-rotate"></i></button>
          <form className="form-inline float-right m-2">
            <input type="search" className="form-control" placeholder="Search Here" id="search" onChange={handleChange} />
            <button type="submit" className="btn btn-primary m-1" onClick={(e) => handleSearch(e)}><i className="fa-solid fa-magnifying-glass"></i></button>
          </form>
        </div>
        {/* search-bar end */}

        {/* table */}
        <table className="table table-hover table-bordered">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Category</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* mapping over the api data */}
            {data.map((pro) => {
              return (
                <tr key={pro.id}>
                  <td>{pro.name}</td>
                  <td>{pro.price}</td>
                  <td>{pro.category}</td>
                  <td>
                    <button className="btn btn-primary m-1"><i className="fa-solid fa-eye"></i> Read</button>
                    <button className="btn btn-success m-1"><i className="fa-solid fa-pen-to-square"></i> Edit</button>
                    <button className="btn btn-danger m-1"><i className="fa-solid fa-xmark"></i> Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
