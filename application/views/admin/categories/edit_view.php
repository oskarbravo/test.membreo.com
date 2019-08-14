<div class="wrapper wrapper-content animated fadeInRight">
  <div class="row">
    <div class="col-lg-12">

      <div class="ibox ">

        <div class="ibox-title">
          <h5>Edit Category:</h5>
          <div class="ibox-tools">
            <a class="collapse-link">
                <i class="fa fa-chevron-up"></i>
            </a>
          </div>
        </div><!-- /ibox -->

        <div class="ibox-content">

          <form method="post" action="<?= site_url('admin/categories/save'); ?>">
            <input name="id" type="hidden" value="<?= $category->id; ?>">

            <div class="form-group  row">           
              <label class="col-sm-2 col-form-label">Category</label>
              <div class="col-sm-10"><input value="<?= $category->category; ?>" name="category" type="text" class="form-control"></div>
            </div>

            <div class="hr-line-dashed"></div>

            <div class="form-group row"><label class="col-sm-2 col-form-label">Status</label>
              <div class="col-sm-10">
                <select class="form-control m-b" name="status">
                  <option <?php if($category->status == 0) { echo 'selected="selected"'; } ?>>Active</option>
                  <option <?php if($category->status == 1) { echo 'selected="selected"'; } ?>>Inactive</option>
                </select>
              </div>
            </div>

            <div class="hr-line-dashed"></div>

            <div class="form-group row">
              <div class="col-sm-4 col-sm-offset-2">
                <a class="btn btn-white btn-sm" href="<?= site_url('admin/categories'); ?>">Cancel</a>
                <button class="btn btn-primary btn-sm" type="submit">Save changes</button>
                <a class="btn btn-danger btn-sm float-right" href="<?= site_url('admin/categories/delete/' . $category->id); ?>" 
                  onclick="return confirm('Are you sure you want to delete this item?');">Delete</a>
              </div>
            </div>
          </form>

        </div><!-- /ibox content -->

      </div><!-- /ibox -->

    </div><!-- /col-lg-12 -->
  </div><!-- /row -->
</div><!-- /wrapper -->