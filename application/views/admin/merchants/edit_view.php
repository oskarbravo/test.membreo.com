<?php print_r($account); ?>
<div class="wrapper wrapper-content animated fadeInRight">
  <div class="row">
    <div class="col-lg-12">

      <div class="ibox ">

        <div class="ibox-title">
          <h5>Edit Merchant:</h5>
          <div class="ibox-tools">
            <a class="collapse-link">
                <i class="fa fa-chevron-up"></i>
            </a>
          </div>
        </div><!-- /ibox -->

        <div class="ibox-content">

          <form method="post" action="<?= site_url('admin/merchants/save'); ?>">
            <input name="id" type="hidden" value="<?= $account->id; ?>">
            <div class="form-group  row">           
              <label class="col-sm-2 col-form-label">Merchant Nickname</label>
              <div class="col-sm-10"><input name="tag" value="<?= $account->tag; ?>" type="text" class="form-control"></div>
            </div>

            <div class="hr-line-dashed"></div>

            <div class="form-group row"><label class="col-sm-2 col-form-label">Merchant Type</label>
              <div class="col-sm-10">
                <select class="form-control m-b" name="gateway">
                  <option <?php if($account->gateway == "Stripe"){ echo "selected='selected'"; } ?> >Stripe</option>
                  <option <?php if($account->gateway == "PayPal_Express"){ echo "selected='selected'"; } ?>>Paypal</option>
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
              <div class="col-sm-10"><input name="private_key" type="text" class="form-control"></div>
            </div>

            <div class="form-group  row">           
              <label class="col-sm-2 col-form-label">Signature</label>
              <div class="col-sm-10"><input name="signature" value="<?= $account->signature; ?>" type="text" class="form-control"></div>
            </div>

            <div class="hr-line-dashed"></div>

            <div class="form-group row">
              <div class="col-sm-4 col-sm-offset-2">
                <a href="<?= site_url('admin/merchants'); ?>" class="btn btn-white btn-sm" type="submit">Cancel</a>
                <button class="btn btn-primary btn-sm" type="submit">Save Changes</button>
              </div>
            </div>
          </form>

        </div><!-- /ibox content -->

      </div><!-- /ibox -->

    </div><!-- /col-lg-12 -->
  </div><!-- /row -->
</div><!-- /wrapper -->