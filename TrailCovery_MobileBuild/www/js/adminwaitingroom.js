function test () {


url = serverURL() + "/changealleventdk.php";



  $.ajax({
      url: url,
      type: 'GET',
      data: "test",
      dataType: 'json',
      contentType: "application/json; charset=utf-8",
      success: function (data) {
          console.log('success')
      }, error: function (data) {
          console.log('error')
      }
  });
}
