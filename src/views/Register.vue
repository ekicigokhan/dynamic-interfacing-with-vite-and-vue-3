<template>
  <div class="main">
    <div class="box">
      <form>
        <img src="../assets/location-hunter.png" alt="lh" />
        <h5>Hesap Oluştur !</h5>
        <div class="inputBox">
          <input type="text" required="required" v-model="firstName" />
          <span>İsim</span>
          <i></i>
        </div>

        <div class="inputBox">
          <input type="text" required="required" v-model="lastName" />
          <span>Soyisim</span>
          <i></i>
        </div>

        <div class="inputBox">
          <input type="text" required="required" v-model="email" />
          <span>E-mail</span>
          <i></i>
        </div>

        <div class="inputBox">
          <input type="password" required="required" v-model="password" />
          <span>Şifre</span>
          <i></i>
        </div>

        <input type="submit" value="Kayıt Ol" @click.prevent="submitForm" />
      </form>
    </div>
  </div>
</template>
  
  <script>
import axios from "axios";

export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    };
  },
  methods: {
    async submitForm() {
      const data = {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        password: this.password,
      };

      try {
        const response = await axios.post(
          "https://localhost:7217/api/Users/addUser",
          data
        );
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }

      this.firstName = "";
      this.lastName = "";
      this.email = "";
      this.password = "";
    },
  },
};
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
  width: 500px;
  height: 700px;
  background: #1c1c1c;
  border-radius: 10px;
  overflow: hidden;
}
.box::before {
  content: "";
  position: absolute;
  top: -50%;
  left: -50%;
  width: 500px;
  height: 700px;
  background: linear-gradient(
    0deg,
    transparent,
    transparent,
    #246985,
    #45f3ff,
    #45f3ff
  );
  z-index: 0;
  transform-origin: bottom right;
  animation: animate 6s linear infinite;
}
.box::after {
  content: "";
  position: absolute;
  top: -50%;
  left: -50%;
  width: 500px;
  height: 700px;
  background: linear-gradient(
    0deg,
    transparent,
    transparent,
    #1da05e,
    #45f3ff,
    #45f3ff
  );
  z-index: 0;
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
  z-index: 1;
  display: flex;
  flex-direction: column;
}
.box form h5 {
  color: #ffff;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-align: center;
}
.box form .inputBox {
  position: relative;
  width: 410px;
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
  z-index: 1;
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
  background: #fff;
  cursor: pointer;
  font-size: 1em;
  border-radius: 4px;
  font-weight: 700;
  width: 410px;
  margin-top: 50px;
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
  margin: auto;
  width: 110px;
  height: 110px;
  border-radius: 40%;
  margin-bottom: 15px;
}
</style>
  