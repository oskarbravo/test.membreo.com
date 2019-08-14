<div class="wrapper wrapper-content animated fadeInRight">

  <div class="row">
      <div class="col-lg-12">

          <div class="ibox ">

              <div class="ibox-title">
                  <h5>Current Merchant Accounts</h5>

                  <div class="ibox-tools">
                      <a class="collapse-link">
                          <i class="fa fa-chevron-up"></i>
                      </a>
                  </div>
              </div>

              <div class="ibox-content">

                  <table class="footable table table-stripped toggle-arrow-tiny">
                      <thead>                    
                      <tr>

                          <th data-toggle="true">Merchant Type</th>
                          <th>Account ID</th>
                          <th>Tag</th>
                          <th>Username</th>
                          <th>Password</th>
                          <th data-hide="all">Signature</th>
                          <!-- <th data-hide="all">Secret Key</th> -->
                          <th>Status</th>
                          <th>Action</th>
                      </tr>
                      </thead>
                      <tbody>

                      <?php for ($x = 0; $x < count($accounts); $x++) { ?>
                        <tr>
                          <td><i class="fab fa-cc-paypal"></i> <?= $accounts[$x]->gateway; ?></td>
                          <td><?= $accounts[$x]->id; ?></td>
                          <td><?= $accounts[$x]->tag; ?></td>
                          <td><?= $accounts[$x]->username; ?></td>
                          <td><?= $accounts[$x]->password; ?></td>
                          <td><?= $accounts[$x]->signature; ?></td>
                          <td><i class="fa fa-check text-navy"></i> Active</td>
                          <td><a href="<?= site_url('admin/merchants/edit/' . $accounts[$x]->id); ?>" class="btn btn-xs btn-outline btn-primary"> Edit</a></td>
                        </tr>
                      <?php	} ?>

                      </tbody>
                      <tfoot>
                      <tr>
                          <td colspan="5">
                              <ul class="pagination float-right"></ul>
                          </td>
                      </tr>
                      </tfoot>
                  </table>

                  <form action="<?php echo base_url(); ?>admin/merchants/add">
                    <div class="form-group row">
                      <div class="col-sm-4 col-sm-offset-2">
                        <button class="btn btn-primary btn-sm" type="submit"><i class="fas fa-plus"></i> Add Merchant Account</button>
                      </div>
                    </div>
                  </form>

              </div>
          </div>
      </div>
  </div><!-- /row -->

</div><!-- /wrapper -->