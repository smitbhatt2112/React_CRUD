import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./index.css";
function AllCarDetails() {
  let params = useParams();
  const navigate = useNavigate();
  const [person, setPerson] = useState({});
  useEffect(() => {
    fetch("https://6316108f33e540a6d38bdfa3.mockapi.io/SuperCars/" + params.id)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setPerson(res);
      });
  }, []);
  return (
    <>
      <div class="fcontainer container">
        <div class="row">
          <div class="col">
            <div
              class="card  hover-shadow"
              style={{
                width: "18rem",
                textAlign: "center"
              }}
            >
              <img class="card-img-top" src={person.CarImage} alt="Card  cap" />
              <div class="card-body">
                <h3 class="card-title text-danger">{person.CarName}</h3>
                <hr />
                <h5>{person.CarType}</h5>
                <hr />
                <h5>{person.CarModel}</h5>
                <hr />
              </div>
            </div>
            <br />
            <table>
              <tr>
                <td colspan="2">
                  <button
                    class="button-56"
                    onClick={() => {
                      fetch(
                        "https://6316108f33e540a6d38bdfa3.mockapi.io/SuperCars/" +
                          params.id,
                        { method: "Delete" }
                      ).then((res) => {
                        navigate("/allcars");
                      });
                    }}
                  >
                    Not_Interested
                  </button>
                </td>
                &nbsp;&nbsp;&nbsp;
                <td colspan="2">
                  <button
                    class="button-57"
                    onClick={() => {
                      fetch(
                        "https://6316108f33e540a6d38bdfa3.mockapi.io/SuperCars/" +
                          params.id,
                        { method: "Get" }
                      ).then((res) => {
                        navigate("/detailofcar/edit/" + params.id);
                      });
                    }}
                  >
                    Modify_CarDetail
                  </button>
                </td>
              </tr>
            </table>
          </div>
          <div class="col">
            <table>
              <tr>
                <h3>Full_Description:</h3>{" "}
              </tr>
              <tr>
                <td>{person.Cardesc}</td>
              </tr>
              <tr>
                <h3>Mileage:</h3>
              </tr>
              <tr>{person.CarMileage}</tr>
              <tr>
                <h3>Prize:</h3>
              </tr>
              <tr>
                <h3 class="text-dark">{person.CarPrize}</h3>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
export default AllCarDetails;
