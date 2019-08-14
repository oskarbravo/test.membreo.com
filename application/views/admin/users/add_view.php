<div class="wrapper wrapper-content animated fadeInRight">
  <div class="row">
    <div class="col-lg-12">

      <div class="ibox ">

        <div class="ibox-title">
          <h5>Add a User:</h5>
          <div class="ibox-tools">
            <a class="collapse-link">
                <i class="fa fa-chevron-up"></i>
            </a>
            <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                <i class="fa fa-wrench"></i>
            </a>
            <ul class="dropdown-menu dropdown-user">
                <li><a href="#" class="dropdown-item">Config option 1</a>
                </li>
                <li><a href="#" class="dropdown-item">Config option 2</a>
                </li>
            </ul>
            <a class="close-link">
                <i class="fa fa-times"></i>
            </a>
          </div>
        </div><!-- /ibox -->

        <div class="ibox-content">

          <form method="post" action="<?php echo site_url('admin/users/save'); ?>">
            
            <div class="form-group  row">           
              <label class="col-sm-2 col-form-label">Email</label>
              <div class="col-sm-10"><input type="text" class="form-control" name="email"></div>
            </div>

            <div class="hr-line-dashed"></div>

            <div class="form-group  row">
              <label class="col-sm-2 col-form-label">First Name</label>
              <div class="col-sm-10"><input type="text" class="form-control" name="firstname"></div>
            </div>

            <div class="hr-line-dashed"></div>

            <div class="form-group  row">
              <label class="col-sm-2 col-form-label">Last Name</label>
              <div class="col-sm-10"><input type="text" class="form-control" name="lastname"></div>
            </div>

            <div class="hr-line-dashed"></div>

            <div class="form-group row">
              <label class="col-sm-2 col-form-label">Password</label>
              <div class="col-sm-10"><input type="password" class="form-control" name="password"></div>
            </div>

            <div class="hr-line-dashed"></div>

            <div class="form-group row"><label class="col-sm-2 col-form-label">Status</label>
              <div class="col-sm-10">
                <select class="form-control m-b" name="account">
                  <option>Admin</option>
                  <option>Contributer</option>
                  <option>Customer</option>
                  <option>Inactive</option>
                </select>
              </div>
            </div>

            <div class="hr-line-dashed"></div>

            <div class="form-group row">
              <div class="col-sm-4 col-sm-offset-2">
                <a class="btn btn-white btn-sm" href="<?= site_url('admin/users'); ?>">Cancel</a>
                <button class="btn btn-primary btn-sm" type="submit">Save</button>
              </div>

            </div>
          </form>

        </div><!-- /ibox content -->

      </div><!-- /ibox -->

    </div><!-- /col-lg-12 -->
  </div><!-- /row -->
</div><!-- /wrapper -->