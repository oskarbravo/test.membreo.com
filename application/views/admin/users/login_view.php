<!DOCTYPE html>
<html>

<head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Membreo - <?php echo $title; ?></title>

    <?php $this->load->view('admin/includes/header_scripts_view.php'); ?>

</head>

<body class="gray-bg">

    <div class="middle-box text-center loginscreen animated fadeInDown">
        <div>
            <div>
              <h1 class="logo-name">Me+</h1>
            </div>
            <h3>Please Login</h3>
            <p>This application is protected with strong encryption and 2 factor authentication.
            </p>
            <p>Please <strong>contact an administrator</strong> if you have lost your credentials</p>
            <form method="post" class="m-t" role="form" action="<?php echo base_url(); ?>admin/users/validate_login">
                <div class="form-group">
                    <input name="email" type="email" class="form-control" placeholder="Email" required="">
                </div>
                <div class="form-group">
                    <input name="password" type="password" class="form-control" placeholder="Password" required="">
                </div>
                <button type="submit" class="btn btn-primary block full-width m-b"><i class="fas fa-unlock-alt"></i> Login</button>
            </form>
            <p class="m-t">
              <small>&copy; <a href="#">Membreo</a> <?php echo date('Y'); ?> All Rights Reserved</small> 
            </p>
        </div>
    </div>

    <?php $this->load->view('admin/includes/footer_scripts_view.php'); ?>

</body>
</html>