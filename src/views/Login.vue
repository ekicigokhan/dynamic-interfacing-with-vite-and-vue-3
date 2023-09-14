<template>
  <div class="main">
    <div class="box">
      <form>
        <img src="../assets/location-hunter.png" alt="lh" />
        <h5>Oturum Aç</h5>
        <div class="inputBox">
          <input type="text" required="required" v-model="email" />
          <span>E-mail</span>
          <i></i>
        </div>

        <div class="inputBox">
          <input type="password" required="required" v-model="password" />
          <span>Şifre </span>
          <i></i>
        </div>

        <div class="links">
          <a href="#">Şifremi unuttum !</a>
          <a href="register">Kayıt Ol</a>
        </div>
        <input type="submit" value="Giriş" to="/profile" />
      </form>
    </div>
  </div>
</template>
  
  <script>
</script>
  
  <style scoped>
.main {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #23242a;
}
.box {
  position: relative;
  width: 380px;
  height: 500px;
  background: #1c1c1c;
  border-radius: 10px;
  overflow: hidden;
}
.box::before {
  content: "";
  position: absolute;
  top: -50%;
  left: -50%;
  width: 380px;
  height: 420px;
  background: linear-gradient(
    0deg,
    transparent,
    transparent,
    #246985,
    #45f3ff,
    #45f3ff
  );
  z-index: 1;
  transform-origin: bottom right;
  animation: animate 6s linear infinite;
}
.box::after {
  content: "";
  position: absolute;
  top: -50%;
  left: -50%;
  width: 380px;
  height: 420px;
  background: linear-gradient(
    0deg,
    transparent,
    transparent,
    #1da05e,
    #45f3ff,
    #45f3ff
  );
  z-index: 1;
  transform-origin: bottom right;
  animation: animate 6s linear infinite;
  animation-delay: -3s;
}
@keyframes animate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.box form {
  position: absolute;
  inset: 5px;
  background: #222;
  padding: 50px 40px;
  border-radius: 10px;
  z-index: 2;
  display: flex;
  flex-direction: column;
}
.box form h5 {
  color: #ffff;
  font-weight: 500;
  text-align: center;
  letter-spacing: 0.1em;
}
.box form .inputBox {
  position: relative;
  width: 300px;
  margin-top: 35px;
}
.box form .inputBox input {
  position: relative;
  width: 100%;
  padding: 20px 10px 10px;
  background: transparent;
  outline: none;
  border: none;
  box-shadow: none;
  color: black;
  font-size: 1em;
  letter-spacing: 0.05em;
  transition: 0.5s;
  z-index: 3;
}
.box form .inputBox span {
  position: absolute;
  left: 0;
  padding: 20px 0px 10px;
  pointer-events: none;
  color: #8f8f8f;
  font-size: 1em;
  letter-spacing: 0.05em;
  transition: 0.5s;
}
.box form .inputBox input:valid ~ span,
.box form .inputBox input:focus ~ span {
  color: #fff;
  font-size: 0.75em;
  transform: translateY(-34px);
}
.box form .inputBox i {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 2px;
  background: #fff;
  border-radius: 4px;
  overflow: hidden;
  transition: 0.5s;
  pointer-events: none;
}
.box form .inputBox input:valid ~ i,
.box form .inputBox input:focus ~ i {
  height: 44px;
}
.box form .links {
  display: flex;
  justify-content: space-between;
}
.box form .links a {
  margin: 10px 0;
  font-size: 0.85em;
  color: #8f8f8f;
  text-decoration: none;
}
.box form .links a:hover,
.box form .links a:nth-child(2) {
  color: #fff;
}
.box form input[type="submit"] {
  border: none;
  outline: none;
  padding: 9px 25px;
  background: var(--light);
  cursor: pointer;
  font-size: 0.9em;
  border-radius: 4px;
  font-weight: 600;
  width: 100px;
  margin-top: 10px;
}
.box form input[type="submit"]:active {
  opacity: 0.8;
}
.box form input[type="submit"]:hover {
  color: #fff;
  background: linear-gradient(
    90deg,
    rgb(26, 167, 96) 35%,
    rgba(0, 212, 255, 1) 100%
  );
}
.box form img {
  width: 100px;
  height: 100px;
  border-radius: 40%;
  margin: auto;
}
</style>
  