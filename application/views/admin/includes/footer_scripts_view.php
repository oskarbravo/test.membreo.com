<!-- Mainly scripts -->
<script src="<?php echo base_url(); ?>js/admin/jquery-3.1.1.min.js"></script>

<script src="<?php echo base_url(); ?>js/admin/popper.min.js"></script>
<script src="<?php echo base_url(); ?>js/admin/bootstrap.min.js"></script>




<script src="https://unpkg.com/metismenu"></script>
<!-- <script src="<?php echo base_url(); ?>js/admin/plugins/metisMenu/jquery.metisMenu.js"></script> -->
<script src="<?php echo base_url(); ?>js/admin/plugins/slimscroll/jquery.slimscroll.min.js"></script>

<!-- Custom and plugin javascript -->
<script src="<?php echo base_url(); ?>js/admin/inspinia.js"></script>
<script src="<?php echo base_url(); ?>js/admin/plugins/pace/pace.min.js"></script>

<!-- FooTable -->
<script src="<?php echo base_url(); ?>js/admin/plugins/footable/footable.all.min.js"></script>

<!-- SUMMERNOTE -->
<script src="<?php echo base_url(); ?>js/admin/plugins/summernote/summernote-bs4.js"></script>

<!-- Data picker -->
<script src="<?php echo base_url(); ?>js/admin/plugins/datapicker/bootstrap-datepicker.js"></script>

<!-- iCheck -->
<script src="js/plugins/iCheck/icheck.min.js"></script>


<!-- <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script> -->
<!-- <script src="https://netdna.bootstrapcdn.com/bootstrap/3.0.2/js/bootstrap.min.js"></script> -->
<!-- <link href="https://netdna.bootstrapcdn.com/bootstrap/3.0.2/css/bootstrap.min.css" rel="stylesheet"> -->



<!-- Page-Level Scripts -->
<script>

    $(document).ready(function() {

        



        $('.footable').footable();

        // products/edit
        $('.summernote').summernote();

        // products/edit
        $('.input-group.date').datepicker({
            todayBtn: "linked",
            keyboardNavigation: false,
            forceParse: false,
            calendarWeeks: true,
            autoclose: true
        });

        // products/index
        $('#date_added').datepicker({
            todayBtn: "linked",
            keyboardNavigation: false,
            forceParse: false,
            calendarWeeks: true,
            autoclose: true
        });

        // products/index
        $('#date_modified').datepicker({
            todayBtn: "linked",
            keyboardNavigation: false,
            forceParse: false,
            calendarWeeks: true,
            autoclose: true
        });

        // users/add
        $('.i-checks').iCheck({
            checkboxClass: 'icheckbox_square-green',
            radioClass: 'iradio_square-green',
        });

        // merchants/index
        $('.footable').footable();
        $('.footable2').footable();

        $('#side-menu').metisMenu({
            toggle: true
        });
    });

</script>