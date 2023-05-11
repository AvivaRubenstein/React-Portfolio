export function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  export const colors = {"Moonstone":"#0fa3b1",
  "Darker-Moonstone" : "#30B0C0",
  "Uranian-Blue":"#b5e2fa",
  "Baby-powder":"#f9f7f3",
  "Vanilla":"#eddea4",
  "Atomic-tangerine":"#f7a072",
  "Peach" : "#F9B38E",
  "Apricot": "#FAC2A5",
  "Rust": "#AE430A",
  "Carribean-Current": "#1D6872",
  "Champage" : "#F3E6D1"

};