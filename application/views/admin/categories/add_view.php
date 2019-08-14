<div class="wrapper wrapper-content animated fadeInRight">
  <div class="row">
    <div class="col-lg-12">

      <div class="ibox ">

        <div class="ibox-title">
          <h5>Add Category:</h5>
          <div class="ibox-tools">
            <a class="collapse-link">
                <i class="fa fa-chevron-up"></i>
            </a>
          </div>
        </div><!-- /ibox -->

        <div class="ibox-content">

          <form method="post" action="<?= site_url('admin/categories/save'); ?>">

            <div class="form-group  row">           
              <label class="col-sm-2 col-form-label">Category</label>
              <div class="col-sm-10"><input name="category" type="text" class="form-control"></div>
            </div>

            <div class="hr-line-dashed"></div>

            <div class="form-group row"><label class="col-sm-2 col-form-label">Status</label>
              <div class="col-sm-10">
                <select class="form-control m-b" name="status">
                  <option>Active</option>
                  <option>Inactive</option>
                </select>
              </div>
            </div>

            <div class="hr-line-dashed"></div>

            <div class="form-group row">
              <div class="col-sm-4 col-sm-offset-2">
                <a class="btn btn-white btn-sm" href="<?= site_url('admin/categories'); ?>">Cancel</a>
                <button class="btn btn-primary btn-sm" type="submit">Save changes</button>
              </div>
            </div>
          </form>

        </div><!-- /ibox content -->

      </div><!-- /ibox -->

    </div><!-- /col-lg-12 -->
  </div><!-- /row -->
</div><!-- /wrapper -->