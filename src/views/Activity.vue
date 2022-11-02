<template>
  <h1>First Check-in</h1>
  <form id="searchFormId">
    <div class="row">
      <div class="app">
        <label>How are you feeling today?</label><br />
        <div class="container_feeling">
          <div class="item">
            <label for="0">
              <input
                class="radio"
                type="radio"
                name="feedback"
                id="0"
                value="0"
              />
              <span>&#128545;</span>
            </label>
          </div>

          <div class="item">
            <label for="1">
              <input
                class="radio"
                type="radio"
                name="feedback"
                id="1"
                value="1"
              />
              <span>&#128542;</span>
            </label>
          </div>

          <div class="item">
            <label for="2">
              <input
                class="radio"
                type="radio"
                name="feedback"
                id="2"
                value="2"
              />
              <span>&#128528;</span>
            </label>
          </div>

          <div class="item">
            <label for="3">
              <input
                class="radio"
                type="radio"
                name="feedback"
                id="3"
                value="3"
              />
              <span>&#128578;</span>
            </label>
          </div>

          <div class="item">
            <label for="4">
              <input
                class="radio"
                type="radio"
                name="feedback"
                id="4"
                value="4"
              />
              <span>&#128512;</span>
            </label>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <label>How much water have you drank today?</label><br />
      <input
        type="number"
        min="5"
        max="100"
        name="waterintake"
        value=""
        id="waterintake"
      />&nbsp;&nbsp;
      <select name="units" id="units">
        <option value="1">Oz.</option>
        <option value="2">Cup</option>
        <option value="3">Litter</option>
        <option value="4">Gallon</option>
      </select>
    </div>
    <div class="row">
      <label>What have you eaten today?</label><br />
      <input type="text" name="foodintake" value="" id="foodintake" />
    </div>
    <div class="row">
      <label>Journal entry</label><br />
      <textarea id="entry"></textarea>
    </div>

    <div class="row">
      <label>Do you take any medications?</label><br />
      <input
        type="checkbox"
        name="medicineStatus"
        value=""
        id="medicineStatus"
      />
    </div>
    <div class="row">
      <div>
        <label>Would you like daily reminders?</label><br />
        <input type="checkbox" name="reminders" value="" id="reminders" />
      </div>
      <div>
        <label>What time would you like daily reminders?</label><br />
        <input type="time" id="appt" name="appt" />
      </div>
    </div>
    <div id="submitDiv" class="row">
      <button type="button" id="submit">Submit</button>
    </div>
  </form>
</template>
