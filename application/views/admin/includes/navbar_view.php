<nav class="navbar-default navbar-static-side" role="navigation">
    <div class="sidebar-collapse">
        <ul class="nav metismenu" id="side-menu">

            <li class="nav-header">
                <div class="dropdown profile-element">
                    <img alt="image" class="rounded-circle" src="<?php echo base_url(); ?>img/admin/profile_small.jpg"/>
                    <a data-toggle="dropdown" class="dropdown-toggle" href="#">
                        <span class="block m-t-xs font-bold"><?php if ($this->session->has_userdata('account')) { echo $this->session->userdata('account')->username; } else { echo "User"; } ?></span>
                        <span class="text-muted text-xs block">menu <b class="caret"></b></span>
                    </a>
                    <ul class="dropdown-menu animated fadeInRight m-t-xs">
                        <li><a class="dropdown-item" href="<?php echo base_url(); ?>admin/users/logout">Logout</a></li>
                    </ul>
                </div>
                <div class="logo-element">
                    Me+
                </div>
            </li>


            <li>
                <a href="#" aria-expanded="false" ><i class="fas fa-home"></i> <span class="nav-label">Home</span><span class="fa arrow"></span></a>
                <ul class="nav nav-second-level in" aria-expanded="false">
                    <li>
                        <a href="<?php echo base_url(); ?>admin/dashboard"><i class="fas fa-tachometer-alt"></i> <span class="nav-label">Dashboard</span></a>
                    </li>
                </ul>
            </li>

            <li>
                <a href="#" aria-expanded="false"><i class="fas fa-shopping-cart"></i> <span class="nav-label">Orders</span><span class="fa arrow"></span></a>
                <ul class="nav nav-second-level in" aria-expanded="false">
                    <li><a href="<?php echo base_url(); ?>admin/orders"><i class="fas fa-list-ul"></i> List Orders</a></li>
                </ul>
            </li>

            <li>
                <a href="#" aria-expanded="false"><i class="fas fa-user-friends"></i> <span class="nav-label">Users</span><span class="fa arrow"></span></a>
                <ul class="nav nav-second-level in" aria-expanded="false">
                    <li><a href="<?php echo base_url(); ?>admin/users"><i class="fas fa-list-ul"></i> List Users</a></li>
                </ul>
                <ul class="nav nav-second-level in" aria-expanded="false">
                    <li><a href="<?php echo base_url(); ?>admin/users/add"><i class="fas fa-plus"></i> Add User</a></li>
                </ul>
            </li>

            <li>
                <a href="#" aria-expanded="false"><i class="fas fa-th-large"></i> <span class="nav-label">Products</span><span class="fa arrow"></span></a>
                <ul class="nav nav-second-level in" aria-expanded="false">
                    <li><a href="<?php echo base_url(); ?>admin/products/"><i class="fas fa-list-ul"></i> List Products</a></li>
                    <li><a href="<?php echo base_url(); ?>admin/products/add"><i class="fas fa-plus"></i> Add Product</a></li>
                </ul>
            </li>

            <li>
                <a href="#" aria-expanded="false"><i class="fas fa-cat"></i> <span class="nav-label">Categories</span><span class="fa arrow"></span></a>
                <ul class="nav nav-second-level in" aria-expanded="false">
                    <li><a href="<?php echo base_url(); ?>admin/categories/"><i class="fas fa-list-ul"></i> List Categories</a></li>
                    <li><a href="<?php echo base_url(); ?>admin/categories/add"><i class="fas fa-plus"></i> Add Category</a></li>
                </ul>
            </li>

            <li>
                <a href="#" aria-expanded="false"><i class="fas fa-credit-card"></i> <span class="nav-label"> Merchants</span><span class="fa arrow"></span></a>
                <ul class="nav nav-second-level in" aria-expanded="false">
                    <li><a href="<?php echo base_url(); ?>admin/merchants/"><i class="fas fa-list-ul"></i> List Merchants</a></li>
                    <li><a href="<?php echo base_url(); ?>admin/merchants/add"><i class="fas fa-plus"></i> Add Merchant</a></li>
                </ul>
            </li>

        </ul>
    </div><!-- /sidebar-collapse -->
</nav><!-- /navbar-default -->