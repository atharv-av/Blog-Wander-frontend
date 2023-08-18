const fetch = require("isomorphic-fetch");
import { API } from "../../config";

export default function signup(user) {
    return fetch(`${API}/signup`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .catch((err) => {
        console.error("Signup error:", err);
      });
  }
  