<template>
<!-- Login page to choose between google login and facebook login to auth to the app-->
  <div class="main-container">
    <form>
      <div class="box-container">
        <h2 class="heading">Sign In</h2>
        <div class="form-fields">
          <input id="email" name="email" type="text" placeholder="Email Address">
        </div>
        <div class="form-fields">
          <input id="password" name="password" type="text" placeholder="Password">
        </div>
        <div class="form-fields">
          <button class="signIn" name="commit" type="submit">
            Sign In
          </button>
        </div>
        <div class="login-choice"><span>or Sign In with</span></div>
        <!--Calls social login component-->
        <SocialLogin />
      </div>
    </form>
    <div class="footer">
       <p>Don't have an account? <a href="/signup"> Create one now</a></p>
    </div>
  </div>
</template>

<script>
//Import social login component and export this component as login
import SocialLogin from '@/components/SocialLogin'
export default {
  name: 'Login',
  components: {
    SocialLogin
  }
}
</script>