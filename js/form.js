  $('#contactForm').on('submit', function(event) {
    event.preventDefault();
    
    let formData = new FormData(document.forms.contactForm)  
    const json = JSON.stringify(Object.fromEntries(formData));

    console.log(json);
    $.ajax({
      type: 'POST',
      crossDomain:true,
      url: 'https://cuaedemails.azurewebsites.net/api/cuaet',
      data: json,
      contentType: 'application/json',
      success: function(data) {
        $("#myModal").modal('show');
      }
    });
  });