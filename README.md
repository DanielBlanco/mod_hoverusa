mod_hoverusa
============

This Joomla! module will display a Map that allows hovering to display configured data.


Example HTML:
-------------
```html

  <div id="usmap" style="width: 450px; height: 350px;" data-state-styles='{"fill":"#CCC"}' data-state-hover-styles='{"fill":"red"}' data-show-labels='false'></div>
  <div id="usmap-HI" class="usmap-state" style="display:none">
    HI Clicked
  </div>
  <div id="usmap-AK" class="usmap-state" style="display:none">
    AK Clicked
  </div>
  <div id="usmap-FL" class="usmap-state" style="display:none">
    FL Clicked
  </div>
  <div id="usmap-SC" class="usmap-state" style="display:none">
    SC Clicked
  </div>
  <div id="usmap-GA" class="usmap-state" style="display:none">
    GA Clicked
  </div>
  <div id="usmap-AL" class="usmap-state" style="display:none">
    AL Clicked
  </div>
  <div id="usmap-NC" class="usmap-state" style="display:none">
    NC Clicked
  </div>
  <div id="usmap-TN" class="usmap-state" style="display:none">
    TN Clicked
  </div>
  <div id="usmap-RI" class="usmap-state" style="display:none">
    RI Clicked
  </div>
  <div id="usmap-CT" class="usmap-state" style="display:none">
    CT Clicked
  </div>
  <div id="usmap-MA" class="usmap-state" style="display:none">
    MA Clicked
  </div>
  <div id="usmap-ME" class="usmap-state" style="display:none">
    ME Clicked
  </div>
  <div id="usmap-NH" class="usmap-state" style="display:none">
    NH Clicked
  </div>
  <div id="usmap-VT" class="usmap-state" style="display:none">
    VT Clicked
  </div>
  <div id="usmap-NY" class="usmap-state" style="display:none">
    NY Clicked
  </div>
  <div id="usmap-NJ" class="usmap-state" style="display:none">
    NJ Clicked
  </div>
  <div id="usmap-PA" class="usmap-state" style="display:none">
    PA Clicked
  </div>
  <div id="usmap-DE" class="usmap-state" style="display:none">
    DE Clicked
  </div>
  <div id="usmap-MD" class="usmap-state" style="display:none">
    MD Clicked
  </div>
  <div id="usmap-WV" class="usmap-state" style="display:none">
    WV Clicked
  </div>
  <div id="usmap-KY" class="usmap-state" style="display:none">
    KY Clicked
  </div>
  <div id="usmap-OH" class="usmap-state" style="display:none">
    OH Clicked
  </div>
  <div id="usmap-MI" class="usmap-state" style="display:none">
    MI Clicked
  </div>
  <div id="usmap-WY" class="usmap-state" style="display:none">
    WY Clicked
  </div>
  <div id="usmap-MT" class="usmap-state" style="display:none">
    MT Clicked
  </div>
  <div id="usmap-ID" class="usmap-state" style="display:none">
    ID Clicked
  </div>
  <div id="usmap-WA" class="usmap-state" style="display:none">
    WA Clicked
  </div>
  <div id="usmap-TX" class="usmap-state" style="display:none">
    TX Clicked
  </div>
  <div id="usmap-CA" class="usmap-state" style="display:none">
    CA Clicked
  </div>
  <div id="usmap-AZ" class="usmap-state" style="display:none">
    AZ Clicked
  </div>
  <div id="usmap-NV" class="usmap-state" style="display:none">
    NV Clicked
  </div>
  <div id="usmap-UT" class="usmap-state" style="display:none">
    UT Clicked
  </div>
  <div id="usmap-CO" class="usmap-state" style="display:none">
    CO Clicked
  </div>
  <div id="usmap-NM" class="usmap-state" style="display:none">
    NM Clicked
  </div>
  <div id="usmap-OR" class="usmap-state" style="display:none">
    OR Clicked
  </div>
  <div id="usmap-ND" class="usmap-state" style="display:none">
    ND Clicked
  </div>
  <div id="usmap-SD" class="usmap-state" style="display:none">
    SD Clicked
  </div>
  <div id="usmap-NE" class="usmap-state" style="display:none">
    NE Clicked
  </div>
  <div id="usmap-IA" class="usmap-state" style="display:none">
    IA Clicked
  </div>
  <div id="usmap-MS" class="usmap-state" style="display:none">
    MS Clicked
  </div>
  <div id="usmap-IN" class="usmap-state" style="display:none">
    IN Clicked
  </div>
  <div id="usmap-IL" class="usmap-state" style="display:none">
    IL Clicked
  </div>
  <div id="usmap-MN" class="usmap-state" style="display:none">
    MN Clicked
  </div>
  <div id="usmap-WI" class="usmap-state" style="display:none">
    WI Clicked
  </div>
  <div id="usmap-MO" class="usmap-state" style="display:none">
    MO Clicked
  </div>
  <div id="usmap-AR" class="usmap-state" style="display:none">
    AR Clicked
  </div>
  <div id="usmap-OK" class="usmap-state" style="display:none">
    OK Clicked
  </div>
  <div id="usmap-KS" class="usmap-state" style="display:none">
    KS Clicked
  </div>
  <div id="usmap-LA" class="usmap-state" style="display:none">
    LA Clicked
  </div>
  <div id="usmap-VA" class="usmap-state" style="display:none">
    VA Clicked
  </div>
  <div id="usmap-DC" class="usmap-state" style="display:none">
    DC Clicked
  </div>

```

Profile HTML:

```html

<div class="usmap-profile">
  <div class="picture">
    <img src="profile-pic.jpg" border="0"/>
  </div>
  <div class="info">
    <div class="name">Daniel Blanco Rojas</div>
    <div class="phone">
      <img src="phone.png"/>
      <span>(506) 8886-5123</span>
    </div>
    <div class="email">
      <img src="email.gif"/>
      <span>daniel.blancorojas@gmail.com</span>
    </div>
    <div class="navigation">
      <a href="" class="next">Next</a>
    </div>
  </div>
</div>

```