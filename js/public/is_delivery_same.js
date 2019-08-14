
// run when checkbox is clicked to synchronise the delivery details with billing details
    function IsDeliverySame_clicked(calledByCode) {
        // alert("clicked");
        if ($('input.isDeliverySame').is(':checked')) {
            // alert("checked");

            $('input.delivery_input').val('');
            $('input.delivery_input').attr("disabled", true);

            document.getElementById('shipping-container').style.display = "none";
        } 
        else 
        {
            // alert('unchecked');
            
            $('input.delivery_input').removeAttr("disabled");

            document.getElementById('shipping-container').style.display = "block";
        }
    }
