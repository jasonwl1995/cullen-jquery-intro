console.log('i has js');
$(document).ready(onReady);

function onReady() {
  console.log('So ready');

  const h1 = $('h1');
  console.log('h1', h1);

  const h2 = $('h2');
  $('h2').addClass('froggy');

  const h1Text = $('h1').text();
  console.log('hiText is', h1Text);
  //$('h1').text('....?');
  // h2.css('backgound-color', 'blue');
  // $(h2.css('backgound-color', 'blue'));
  const louderText = h1Text.toUpperCase() + '!!!';
  $(h1).text(louderText);
  console.log('h2', h2);
}
