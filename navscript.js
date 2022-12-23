<script>
    $(document).ready(function(){
        $(".menu-btn").click(function(){
            $(this).toggleClass("bottom-border");
            $(this).next(".nav-elements").slideToggle("slow");
        });
    });
</script>
