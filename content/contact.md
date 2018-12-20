+++
title = "Contact Me"
date = "2014-04-09"
sidemenu = "true"
description = "... send me a line"

+++
<section id="add-post">
<div class = "alert"> Your message has been sent</div>
<form id = "contactForm" class=" pure-form pure-form-stacked">
  <fieldset>
    <div class="pure-g">
      <div class="pure-u-1 pure-u-md-1-3">
        <label for="name">Name</label>
        <input id="name" required class="pure-u-23-24" type="text">
      </div>

      <div class="pure-u-1 pure-u-md-1-3">
        <label for="email">E-Mail</label>
        <input id="email" required class="pure-u-23-24" type="email" required>
      </div>

      <div class="pure-u-1 pure-u-md-1-3">
        <label for="city">City</label>
        <input id="city" class="pure-u-23-24" type="text">
      </div>

      <div class="pure-u-1 pure-u-md-1-3">
        <label for="state">State</label>
        <select id="state" class="pure-input-1-2">
          <option>CA</option>
          <option>Outside CA</option>
          <option>Outside USA</option>
        </select>
      </div>
    </div>
    <fieldset class="pure-group">
      <textarea id="message" required class="pure-input-1-2" placeholder="Your message"></textarea>
    </fieldset>
    <button id = "sendContactFormData" type="submit" class=" pure-button pure-button-primary">Send</button>
  </fieldset>
</form>
</section>

