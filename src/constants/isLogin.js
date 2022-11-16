const isLogin = () => {
  const token = localStorage.getItem("accessToken");
  console.log("실행");
  if (!token) {
    console.log("비로그인");
    return false;
  } else {
    console.log("마이페이지로 이동");
    return true;
  }
};

export default isLogin;
