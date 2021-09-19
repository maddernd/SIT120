<template>
  <div id="contact">
    <!--Contact form for sharpei House -->
    <form class="contact-form" @submit.prevent="submit">
      <fieldset>
        <!--Legend for the form -->
        <legend>Sharpei House Contact Form</legend>
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
    // check for valid email adress for future use
    isEmail: function (value) {
      return emailRegExp.test(value);
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
};
</script>
<style scoped lang="scss">
/*CSS for body of contact form */
body {
  color: linear-gradient(45deg, #ffc107, #ff6f00);
  background:linear-gradient(45deg, #ffc107, #ff6f00);
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
  background: linear-gradient(45deg, #ffc107, #ff6f00);
  box-shadow: 0 4px 6px 0 #0a0a0a;
}
/*CSS for submit button*/
.submitbutton {
  background-color: linear-gradient(45deg, #ffc107, #ff6f00);
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
/*Mobile settings to shrink text*/
@media screen and (max-width: 759px) {
  .contact-form {
    display: inline-block;
    max-width: 50%;
    max-height: 60%;
    padding-left: 5%;
    padding-right: 5%;
    text-size-adjust: 50%;
    box-shadow: 0 4px 6px 0 #ffc107;
  }
  .submitbutton {
    display: inline-block;
    max-width: 50%;
    max-height: 60%;
  }
  body {
    max-height: 50%;
    max-width: 20%;
  }
  /*CSS for container of contact form */
  .container {
    max-height: 50%;
    min-height: 20%;
    padding-left: 5%;
    padding-right: 5%;
  }
  /*CSS for text colour and font size */
  .a {
    color: #2c3e50;
    text-decoration: none;
    font-size: 6pt;
  }
  /*CSS for header */
  header {
    position: relative;
    height: 150px;
    padding-top: 100px;
    font-size: 6pt;
  }

  .h1 {
    text-align: center;
    font-size: 8pt;
  }

  .contact {
    display: inline-block;
  }
  .label {
    text-align: center;
    font-weight: 300;
    font-size: 8px;
  }
  /*CSS for mobile label*/
  input {
    text-align: center;
    font-weight: 300;
    font-size: 8px;
  }
  /*CSS for mobile legend*/
  legend {
    text-align: center;
    font-weight: 300;
    font-size: 10px;
  }
  /*CSS for the insides of the contact form */
  .contact-form input[type="text"],
  .contact-form input[type="sharpeiname"],
  .contact-form input[type="email"],
  .contact-form textarea,
  .contact-form select,
  .contact-form legend {
    display: block;
    max-width: 100%;
    max-height: 100%;
  }
  #contact {
    display: inline-block;
    justify-content: center;
    position: relative;
    max-width: 100%;
    max-height: 100%;
  }
}
</style>
