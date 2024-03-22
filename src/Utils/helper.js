export const validateEmail = (email) => {
    const emailRegex =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(email);
  };

export const capitalizeFirstLetter = (string) => {
  if (string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
};