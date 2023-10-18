import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function ReqCar() {
  const navigate = useNavigate();
  const params = useParams();
  const [data, setData] = useState({});
  useEffect(() => {
    if (params.id > 0) {
      fetch(
        "https://6316108f33e540a6d38bdfa3.mockapi.io/SuperCars/" + params.id
      )
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          setData(res);
        });
    }
  }, []);
  return (
    <form>
      <h1 class="text-danger">Modify This Car</h1>
      <form action="/action_page.php" />
      <label for="fname">Car name:</label>
      <br />
      <input
        type="text"
        value={data.CarName}
        id="fname"
        name="fname"
        onChange={(e) => {
          setData({ ...data, CarName: e.target.value });
        }}
      />
      <br />
      <label for="lname">Image:</label>
      <br />
      <input
        type="text"
        id="lname"
        name="lname"
        value={data.CarImage}
        onChange={(e) => {
          setData({ ...data, CarImage: e.target.value });
        }}
      />
      <br />
      <label for="lname">Detail:</label>
      <br />
      <input
        type="text"
        id="lname"
        name="lname"
        value={data.Cardesc}
        onChange={(e) => {
          setData({ ...data, Cardesc: e.target.value });
        }}
      />
      <br />
      <label for="lname">Car_Prize:</label>
      <br />
      <input
        type="text"
        id="lname"
        name="lname"
        value={data.CarPrize}
        onChange={(e) => {
          setData({ ...data, CarPrize: e.target.value });
        }}
      />
      <br />
      <label for="lname">Car_Model:</label>
      <br />
      <input
        type="text"
        id="lname"
        name="lname"
        value={data.CarModel}
        onChange={(e) => {
          setData({ ...data, CarModel: e.target.value });
        }}
      />
      <br />
      <label for="lname">Mileage:</label>
      <br />
      <input
        type="text"
        id="lname"
        name="lname"
        value={data.CarMileage}
        onChange={(e) => {
          setData({ ...data, CarMileage: e.target.value });
        }}
      />
      <br />
      <label for="lname">Type:</label>
      <br />
      <input
        type="text"
        id="lname"
        name="lname"
        value={data.CarType}
        onChange={(e) => {
          setData({ ...data, CarType: e.target.value });
        }}
      />
      <br />
      <button
        class="button-52"
        type="button"
        onClick={() => {
          if (params.id > 0) {
            fetch(
              "https://6316108f33e540a6d38bdfa3.mockapi.io/SuperCars/" +
                params.id,
              {
                method: "PUT",
                body: JSON.stringify(data),
                //this header's content-type is must otherwise detail will be garbage
                headers: {
                  "Content-Type": "application/json"
                }
              }
            ).then(() => {
              navigate("/allcars");
            });
          } else {
            fetch("https://6316108f33e540a6d38bdfa3.mockapi.io/SuperCars/", {
              method: "POST",
              body: JSON.stringify(data),
              //this header's content-type is must otherwise detail will be garbage
              headers: {
                "Content-Type": "application/json"
              }
            }).then(() => {
              navigate("/allcars");
            });
          }
        }}
      >
        {params.id > 0 && "Edit"}
        {!(params.id > 0) && "Add"}
        Submit
      </button>
    </form>
  );
}
export default ReqCar;
