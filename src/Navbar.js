import React, { useState } from "react";
let idToEdit = -1;

export default function Navbar() {
  //let [comments,setComments]= useState([""]);
  let [commentsdata, setCommentsdata] = useState({});
  let [faculties, setfaculties] = useState([
  ]);

  let [edit,setEdit] = useState(-1);
  // edit , delete logic for simple string
  /*let commentsadd = comments.map((com,i)=>{
      return (
     <div> 
      <li>
       {i}{com}{" "}
       <button class="btn btn-success" style={{margin:"10px"}}
       onClick={()=>{
          idToEdit=i;
          setCommentsdata(comments[i]);
       }}
       >{" "}Edit{" "}</button>
       <button class="btn btn-danger" style={{margin:"10px"}}
       onClick={()=>{
          comments.splice(i,1);
          setComments([...comments]);
       }}>
          {" "} Delete {" "}
       </button>         
      </li>
      </div>
      );
  });
  */
  let formfaculties = faculties.map((fac, i) => {
    return (<>
    <tr>
      <td>{fac.Name}</td>
      <td>{fac.Email}</td>
      <td>{fac.Age}</td>
      <td>
        <button
          onClick={() => {
            setEdit(i);
            setCommentsdata(
              {
                Email: faculties[i].Email,
                Name: faculties[i].Name,
                Age: faculties[i].Age
              }
            )
          }}>{" "}Edit{" "}</button>
      </td>

      <td>
        <button
          onClick={() => {
            faculties.splice(i, 1);
            setfaculties([...faculties]);
          }}
        >
          {" "}
          Delete{" "}
        </button>
      </td>
      </tr>
    </>);
  });
  return (
    <>
      <form>
        <div class="form-group" >
          <label for="exampleInputPassword1">Enter Your Name:</label>
          <input style={{ backgroundColor: "skyblue" }} type="text" class="form-control" id="exampleInputPassword1" value={commentsdata.Name}
            onChange={(e) => {
              setCommentsdata({ ...commentsdata, Name: e.target.value });
            }} />
          <hr />
          <label for="exampleInputPassword1">Enter Your Email:</label>
          <input style={{ backgroundColor: "skyblue" }} type="text" class="form-control" id="exampleInputPassword1" value={commentsdata.Email}
            onChange={(e) => {
              setCommentsdata({ ...commentsdata, Email: e.target.value });
            }} />
          <hr />
          <label for="exampleInputPassword1">Enter Your Age:</label>
          <input style={{ backgroundColor: "skyblue" }} type="text" class="form-control" id="exampleInputPassword1" value={commentsdata.Age}
            onChange={(e) => {
              setCommentsdata({ ...commentsdata, Age: e.target.value });
            }} />
        </div>

        <input type="submit" style={{ marginLeft: "350px" }} class="btn btn-primary"
          onClick={(e) => {
            if (edit > -1) {
              faculties[edit]= commentsdata;
              setEdit(-1);
              console.log("print");

            }
            else {
              
              setfaculties([...faculties, commentsdata]);
            }

            setCommentsdata({
              ...commentsdata,
              Age: " ",
              Email: " ",
              Name: " "
            });
            e.preventDefault();
          }}
          value="Save comments"
        />
      </form>
      <br />
      <div style={{ backgroundColor: "lightgreen" }}>
        <table border="1">{formfaculties}</table>
      </div>
    </>
  );
}



