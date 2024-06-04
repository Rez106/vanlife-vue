const useIsLoggedIn = () => {
  const isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn"));
  return isLoggedIn;
};

export default useIsLoggedIn;
