<template>
  <h1>Your Profile Detail</h1>
  <form id="searchFormId">
    <div class="row">
      <label>Please enter your name</label><br />
      <input type="text" name="name" value="" id="name" />
    </div>
    <div class="row">
      <label>Upload a profile image</label><br />
      <input type="file" name="profilepic" value="" id="profilepic" />
    </div>
    <div class="row">
      <label>What is your date of birth</label><br />
      <!--<input type="text" name="dob" value="" id="dob" />-->
      <input type="date" id="dob" name="dob">
    </div>
    <div class="row">
      <label>What is your e-email</label><br />
      <input type="text" name="email" value="" id="email" />
    </div>
    <div id="submitDiv" class="row">
      <button type="button" id="submit">Start Your First Check-in!</button>
    </div>
  </form>
</template>
