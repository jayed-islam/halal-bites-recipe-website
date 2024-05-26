/* eslint-disable no-unused-vars */
import { paths } from "../layouts/paths";

function jwtDecode(token) {
  const [_, base64Url, signature] = token.split(".");

  if (!signature) {
    return { exp: Date.now() / 1000 };
  }
  const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  const jsonPayload = decodeURIComponent(
    window
      .atob(base64)
      .split("")
      .map((c) => `%${`00${c.charCodeAt(0).toString(16)}`.slice(-2)}`)
      .join("")
  );

  return JSON.parse(jsonPayload);
}

export const tokenExpired = (exp) => {
  let expiredTimer;
  const currentTime = Date.now();

  const timeLeft = exp * 1000 - currentTime;

  clearTimeout(expiredTimer);

  expiredTimer = setTimeout(() => {
    alert("Token expired");

    localStorage.removeItem("accessToken");

    window.location.href = paths.website.signin;
  }, timeLeft);
};

export const isValidToken = (accessToken) => {
  if (!accessToken) {
    return false;
  }
  const decoded = jwtDecode(accessToken);

  const currentTime = Date.now() / 1000;

  return decoded.exp > currentTime;
};

export const setSession = (accessToken) => {
  if (accessToken) {
    console.log("token", accessToken);
    localStorage.setItem("accessToken", accessToken);

    const { exp } = jwtDecode(accessToken);

    tokenExpired(exp);
  } else {
    localStorage.removeItem("accessToken");
  }
};
