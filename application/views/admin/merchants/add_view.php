<div class="wrapper wrapper-content animated fadeInRight">
  <div class="row">
    <div class="col-lg-12">

      <div class="ibox ">

        <div class="ibox-title">
          <h5>Add Merchant:</h5>
          <div class="ibox-tools">
            <a class="collapse-link">
                <i class="fa fa-chevron-up"></i>
            </a>
          </div>
        </div><!-- /ibox -->

        <div class="ibox-content">

          <form method="post" action="<?= site_url('admin/merchants/save'); ?>">

            <div class="form-group  row">           
              <label class="col-sm-2 col-form-label">Merchant Nickname</label>
              <div class="col-sm-10"><input name="tag" type="text" class="form-control"></div>
            </div>

            <div class="hr-line-dashed"></div>

            <div class="form-group row"><label class="col-sm-2 col-form-label">Merchant Type</label>
              <div class="col-sm-10">
                <select class="form-control m-b" name="gateway">
                  <option>Stripe</option>
                  <option>Paypal</option>
                  <option>SagePay</option>
                  <option>Redsys</option>
                </select>
              </div>
            </div>

            <div class="hr-line-dashed"></div>

            <div class="form-group  row">           
              <label class="col-sm-2 col-form-label">Username</label>
              <div class="col-sm-10"><input name="username" type="text" class="form-control"></div>
            </div>

            <div class="form-group  row">           
              <label class="col-sm-2 col-form-label">Password</label>
              <div class="col-sm-10"><input name="password" type="text" class="form-control"></div>
            </div>

            <div class="hr-line-dashed"></div>

            <div class="form-group  row">           
              <label class="col-sm-2 col-form-label">Public Key</label>
              <div class="col-sm-10"><input name="public_key" type="text" class="form-control"></div>
            </div>

            <div class="hr-line-dashed"></div>

            <div class="form-group  row">           
              <label class="col-sm-2 col-form-label">Private Key</label>
              <div class="col-sm-10"><input name="private_key"type="text" class="form-control"></div>
            </div>

            <div class="form-group  row">           
              <label class="col-sm-2 col-form-label">Signature</label>
              <div class="col-sm-10"><input name="signature" type="text" class="form-control"></div>
            </div>

            <div class="hr-line-dashed"></div>

            <div class="form-group row">
              <div class="col-sm-4 col-sm-offset-2">
                <button class="btn btn-white btn-sm" type="submit">Cancel</button>
                <button class="btn btn-primary btn-sm" type="submit">Save</button>
              </div>
            </div>
          </form>

        </div><!-- /ibox content -->

      </div><!-- /ibox -->

    </div><!-- /col-lg-12 -->
  </div><!-- /row -->
</div><!-- /wrapper -->