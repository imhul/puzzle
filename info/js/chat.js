var myDataRef = new Firebase('https://glowing-fire-9474.firebaseio.com/');

$('#send').on('click', () => {
  myDataRef.push({
    user: $('#user').val(),
    text: $('#text').val()
  });
  $('#user, #text').val('');
});

myDataRef.on('child_added', function(snapshot) {
  let comment = snapshot.val();
  $('#comments').append(`
    <li>
      <strong>${comment.user}</strong>:
      ${comment.text}
    </li>
  `);
});
