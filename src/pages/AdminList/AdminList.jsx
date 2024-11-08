import React, { useEffect, useState } from "react";
import "./AdminList.css";
import axios from "axios";
import { toast } from "react-toastify";
import { assets } from "../../assets/assets";

const AdminList = ({ url }) => {
  //   const url = "backendUrl";
  const [list, setList] = useState([]);

  //   const fetchList = async () => {
  //     const response = await axios.get(`${url}/api/...`)
  //     if(response.data.success) {
  //         setList(response.data.data)
  //     }else {
  //         toast.error("Error");
  //     }
  //   }

  const fetchList = () => {
    const response = {
      success: true,
      data: [
        {
          category: "Horror",
          description: "QAZ WSX EDC RFV",
          // image: ""
          name: "Book x",
          price: 1500,
          id: "QQQ112255",
        },
        {
          category: "Fairy Tales",
          description: "QWE ASD ZXC NNN",
          // image: "",
          name: "book y",
          price: 1800,
          id: "POI885663",
        },
      ],
    };

    setList(response.data);
  };

  const removeBook = async (bookId) => {
    console.log(bookId);
    // API to remove Book

    // const response = await axios.post(`${url}/api/book`, { id: bookId });

    fetchList();

    // if(response.data.success) {
    //     toast.success(response.data.message);
    // }else {
    //     toast.error("Error")
    // }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className="list add flex-col">
      <p>All Books List</p>
      <div className="list-table">
        <div className="list-table-format title">
          <b>Image</b>
          <b>Name</b>
          <b>category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.map((item, index) => {
          return (
            <div key={index} className="list-table-format">
              {/* <img src={`${url}/img`} alt="" /> */}
              <img src={assets.fairy_tales03} alt="" />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>{item.price}</p>
              <p onClick={() => removeBook(item.id)} className="cursor">
                X
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AdminList;
