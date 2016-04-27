# SDC Site Core
Provides a very basic css reset, sky fonts package and 'cut the mustard' javascript snippet

## CSS
An importable bundle with a basic reset css, base 64'd skytext regular and medium and a global settings file for sass variables

## JS
Consists of a head.js file with a cut the mustard test for modern browser support. The test is based on detection of two browser apis - page visibility and CSS.supports. All modern browsers support one or both of these, whereas legacy browsers such as IE8, 9 and old android do not.

This test creates a global variable:

```javascript 
window.isModernBrowser
``` 
and a css class applied to the site html node:

```html
<html class="js is-legacy">
```
or:

```html
<html class="js is-modern">
```

## Support
Browsers that do not pass the above test will not recieve site javascript and may thus lack some functionailty. However, the main text of each page should still be readable and there should be a basic, useable navigation.

#### Modern browser
Browsers and devices listed here should enjoy full site functionality, javascript support and rich design.

| Yes          | Support % |
| :----------  | :------   |
| IE10         | 0.51      |
| IE11         | 7.9       | 
| Edge         | 2.7       |
| IE Mob 10+   | 1.0       |
| And 4.4+     | 14.2      |
| IOS 7+       | 22.7      |
| FF-10+       | 7.1       |
| Chrome-10+   | 27.9      |
| Saf 7+       | 4.2       |
| Opera-2+     | 0.62      |
| other        | 2.18      |
| ***total***  | 91.1      |

#### Legacy browser
Browsers and devices listed here will not recieve site javascript and will be missing some functionailty. All text should be viewable and basic navigation functional, but design and appearence may be basic and stripped back.

| No           | Support % |
| :----------  | :----     |
| IE8          | 0.52      |
| IE9          | 0.6       |
| And 4.3<     | 1.9       |
| IOS 6<       | 0.1       |
| FF-3<        | 0.3       |
| Chrome-3<    | 0.9       |
| Saf 6<       | 0.6       |
| Opera Mini   | 1         |
| ***total***  | 5.9       |
*Stats based on caniuse.com UK values
