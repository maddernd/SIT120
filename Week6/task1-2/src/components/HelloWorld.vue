<template>
  <div id="contact">
    <!--Contact form for sharpei House -->
    <form class="contact-form" @submit.prevent="submit">
      <fieldset>
        <div>
          <!--Labels and Input boxes for the informaton required -->
          <label class="label" for="name">Name </label>
          <input type="text" name="name" id="name" required="" v-model="name" />
        </div>
        <div>
          <label class="label" for="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            required=""
            :class="{ email, error: !email.valid }"
            v-model="email.value"
          />
        </div>
        <div>
          <label class="label" for="name">Sharpei </label>
          <input
            type="text"
            name="name"
            id="name"
            required=""
            v-model="sharpeiname"
          />
        </div>
        <div>
          <!--Message box with character counting -->
          <label class="label" for="textarea">Message </label>
          <textarea
            class="message"
            name="textarea"
            id="textarea"
            required=""
            v-model="message.text"
            :maxlength="message.maxlength"
          ></textarea>
          <!--Count characters entered in box -->
          <span class="counter"
            >{{ message.text.length }} / {{ message.maxlength }}</span
          >
        </div>
        <div>
          <!--Submit button styled as per other buttons on site -->
          <input class="submitbutton" type="submit" value="Send Form" />
        </div>
        <div>
          <label for="meatmouth" class="form-check-label">
            <input
              type="checkbox"
              id="MeatMouth"
              class="form-check-input"
              value="MeathMouth"
              v-model="checkedNames"
            />
            MeatMouth
          </label>
        </div>
        <div class="form-check">
          <label for="BoneMouth" class="form-check-label">
            <input
              type="checkbox"
              id="BoneMouth"
              class="form-check-input"
              value="BoneMouth"
              v-model="checkedNames"
            />
            BoneMouth
          </label>
        </div>
      </fieldset>
    </form>
  </div>
</template>

<script>
export default {
  name: "Contact",
  data: function () {
    return {
      //place holders for name,sharpei name and email
      name: "Enter Name",
      sharpeiname: "Sharpei Name",
      email: {
        value: "Email@emaildomain.com",
        valid: true,
      },

      //place holder for message box, max length 255
      message: {
        text: `Enter Message here,\n...`,
        maxlength: 255,
      },
      //flag for submited message
      submitted: false,
    };
  },
  methods: {
    // submit form handler
    submit: function () {
      this.submitted = true;
    },
    // validate by type and value for future use not live
    validate: function (type, value) {
      if (type === "email") {
        this.email.valid = this.isEmail(value) ? true : false;
      }
    },
    // check or uncheck all
    checkAll: function (event) {
      this.selection.features = event.target.checked ? this.features : [];
    },
  },
  watch: {
    // watching nested property
    "email.value": function (value) {
      this.validate("email", value);
    },
  },
}

</script>
<style>

body {
  color: #fff;
  background: #ffc107;
  font-family: "Montserrat", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
/*CSS for container of contact form */
.container {
  display: inline-block;
  position: center;
  max-height: 100%;
  max-width: 100%;
}
/*CSS for form in general of contact form */
.contact-form {
  display: inline-block;
  position: center;
  justify-content: center;
}

.center {
  display: inline-block;
  justify-content: center;
  align-items: center;
}

a {
  color: #2c3e50;
  text-decoration: none;
}

header {
  position: relative;
  height: 150px;
  padding-top: 100px;
}

header h1 {
  text-align: center;
  font-size: 2.4rem;
  font-weight: 300;
}
/* Position form in middle of screen and inline */
#contact {
  display: inline-block;
  justify-content: center;
  position: relative;
}
/*Set paramaters for the contact form*/
.contact-form {
  font-size: 16px;
  width: 500px;
  padding: 15px 30px;
  border-radius: 4px;
  margin: 50px auto;
  width: 500px;
  background-color: #fff;
  box-shadow: 0 4px 6px 0 #ffc107;
}
/*CSS for submit button*/
.submitbutton {
  background-color: #ffc107;
  display: inline-block;
  padding: 0.35em 1.2em;
  border: 0.1em solid #ffffff;
  margin: 0 0.3em 0.3em 0;
  box-sizing: border-box;
  text-decoration: none;
  font-family: "Montserrat", sans-serif;
  font-weight: 300;
  text-align: center;
  transition: all 0.2s;
  border-radius: 0.8em;
}
/*CSS for inside form*/
.contact-form input[type="text"],
.contact-form input[type="sharpeiname"],
.contact-form input[type="email"],
.contact-form textarea,
.contact-form select,
.contact-form legend {
  display: block;
  width: 100%;
  max-height: 100%;
}
</style>