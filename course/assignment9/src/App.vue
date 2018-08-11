<template>
    <div class="container">
        <form>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <!-- Exercise 1 -->
                    <!-- Create a Signup Form where you retrieve the following Information -->
                    <!-- Full Name (First Name + Last Name) -->
                    <!-- Mail -->
                    <!-- Password -->
                    <!-- Store Data? Yes/No -->

                    <!-- Exercise 2 -->
                    <!-- Only display the Form if it has NOT been submitted -->
                    <!-- Display the Data Summary ONCE the Form HAS been submitted -->

                    <!-- Exercise 3 -->
                    <!-- Edit the Example from above and create a custom "Full Name" Control -->
                    <!-- which still holds the First Name and Last Name Input Field -->
                    <form v-if="!isSubmitted">
                        <app-fullname v-model="fullName"></app-fullname>
                        <div class="form-group">
                            <label for="email">eMail:</label>
                            <input type="text" class="form-control" v-model="email">
                        </div>
                        <div class="form-group">
                            <label for="Password">Password</label>
                            <input type="password" class="form-control" v-model="password">
                        </div>
                        <div class="form-group">
                            <label for="dataStore">Store Data?</label>
                            <input type="radio" value="yes" v-model="store"> Yes <input type="radio" value="no" v-model="store"> No
                        </div>
                        <button class="btn btn-primary" @click.prevent="submitted = true">Submit!</button>
                    </form>
                </div>
            </div>
        </form>
        <hr>
        <div class="row" v-if="isSubmitted">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: {{ fullName }}</p>
                        <p>Mail: {{email}}</p>
                        <p>Password: {{ password }}</p>
                        <p>Store in Database?: {{ stored }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Fullname from "./Fullname.vue";

export default {
  data() {
    return {
      isSubmitted: false,
      fullName: "",
      email: "",
      password: "",
      stored: "no"
    };
  },
  components: {
    appFullname: Fullname
  }
};
</script>

<style>
</style>
