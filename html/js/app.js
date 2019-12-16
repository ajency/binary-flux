$(document).ready(function(){

    if($(".select2-outline-dark").length){
        $(".select2-outline-dark").select2({
            minimumResultsForSearch: -1,
            containerCssClass: "select-out-dark-wrap",
            dropdownCssClass: "select-out-dark-result",
            allowClear: true
        });
    }    
});