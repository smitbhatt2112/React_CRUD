import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function AllCars() {
  const [persons, setPersons] = useState([]);
  useEffect(() => {
    fetch("https://6316108f33e540a6d38bdfa3.mockapi.io/SuperCars")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setPersons(res);
      });
  }, []);

  const formPersons = persons.map((per) => {
    return (
      <>
        <Link to={"../detailperson/" + per.id} />
        <div class="col-md-3 mb-5">
          <div class="row">
            <div class="d-flex justify-content-around">
              <div class="card card1" style={{ width: "18rem" }}>
                <img
                  class="card-img-top"
                  src={per.CarImage}
                  alt="Card image cap"
                />
                <div class="card-body">
                  <h4>CarName:</h4>
                  <h5 class="card-title">{per.CarName}</h5>
                  <br />
                  <h4>Car_Type:</h4>
                  <p class="card-text">{per.CarType} </p>
                  <a
                    href={"../detailofcar/" + per.id}
                    to={"../detailofcar/" + per.id}
                    class="btn btn-primary"
                  >
                    Details
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  });
  return formPersons;
}

export default AllCars;
