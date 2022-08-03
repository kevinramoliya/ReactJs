import { React } from "react";
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));
const faculty = [
  {
    photo: (
      <img
        src="https://darshan.ac.in/U01/Faculty-Photo/09CEAVB_19042019_063947AM.jpg"
        width="100px"
      />
    ),
    Name: "Prof.Bala Sir",
    Branch: "CSE",
    Exp: "12+years",
    Contactno: 9624822202
  },
  {
    photo: (
      <img
        src="https://darshan.ac.in/U01/Faculty-Photo/02CEPUJ_19042019_063653AM.jpg"
        width="100px"
      />
    ),
    Name: "Dr.Jadeja Sir",
    Branch: "CSE",
    Exp: "12+years",
    Contactno: 9879461848
  },
  {
    photo: (
      <img
        src="https://darshan.ac.in/U01/Faculty-Photo/07CERGV_19042019_063838AM.jpg"
        class="img"
        width="100px"
      />
    ),
    Name: "Prof. Rupesh Sir",
    Branch: "CSE",
    Exp: "14+years",
    Contactno: 9428048512
  },
  {
    photo: (
      <img
        src="https://darshan.ac.in/U01/Faculty-Photo/12CENRV_19042019_064035AM.jpg"
        width="100px"
      />
    ),
    Name: "Prof.NaimishSir",
    Branch: "CSE",
    Exp: "9+years",
    Contactno: 8866215253
  }
];
root.render(
  <>
    <table border="1px solid black">
      <tr>
        {faculty.map((fac) => {
          return (
            <td>
              {fac.photo}
              <br />
              {fac.Name}
              <br />
              {fac.Branch}
              <br />
              {fac.Exp}
              <br />
              {fac.Contactno}
              <br />
            </td>
          );
        })}
      </tr>
    </table>
  </>
);
