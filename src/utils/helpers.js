export function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  export const colors = {"Moonstone":"#0fa3b1",
  "Uranian-Blue":"#b5e2fa",
  "Baby-powder":"#f9f7f3",
  "Vanilla":"#eddea4",
  "Atomic-tangerine":"#f7a072"};