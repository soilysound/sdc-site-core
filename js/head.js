(function(){

  // set global variable for browser level
  window.isModernBrowser = false;

  // array of classes to add to html element
  var classes = ['js', 'is-legacy'];

  // cut the mustard - https://sixtwothree.org/posts/cutting-the-mustard-revisited
  // 'legacy': <IE10 & Android Webkit<4.4 - no reliable svg, no reliable flexbox, no reliable css animations
  // 'modern': everything else - classlist, requestanimationframe etc;

  if('visibilityState' in document || !!(window.CSS && window.CSS.supports)){
    window.isModernBrowser = true;
    classes = ['js', 'is-modern'];
  }

  // add classes to html element
  document.documentElement.className = classes.join(' ');

}());