$(document).reade(function(){
    $("#fileToUpload").change(function(e){
        alert(e.target.files[0].name);
        $("#avatar").attr('scr','../images/'+e.target.files[0].name);
    })
})