<div class="wrapper wrapper-content animated fadeInRight">

  <div class="ibox-content m-b-sm border-bottom">
    <div class="row">
        <div class="col-sm-2">
            <div class="form-group">
                <label class="col-form-label" for="price">Email</label>
                <input type="text" id="price" name="price" value="" placeholder="Email Address..." class="form-control">
            </div>
        </div>
        <div class="col-sm-2">
            <div class="form-group">
                <label class="col-form-label" for="quantity">Name</label>
                <input type="text" id="quantity" name="quantity" value="" placeholder="First / Surname" class="form-control">
            </div>
        </div>
        <div class="col-sm-4">
            <div class="form-group">
                <label class="col-form-label" for="status">Status</label>
                <select name="status" id="status" class="form-control">
                    <option value="1" selected>Active</option>
                    <option value="0">Disabled</option>
                </select>
            </div>
        </div>
    </div>
  </div><!-- /ibox-content -->

  <div class="row">
    <div class="col-lg-12">
        <div class="ibox">
            <div class="ibox-content">

              <table class="footable table table-stripped toggle-arrow-tiny" data-page-size="15">
                  <thead>
                    <tr>
                        <th data-hide="phone">Email Address</th>
                        <th data-hide="all">Last Login:</th>
                        <th data-hide="phone">Firstname</th>
                        <th data-hide="phone,tablet" >Surname</th>
                        <th data-hide="phone">Status</th>
                        <th class="text-right" data-sort-ignore="true">Action</th>
                    </tr>
                  </thead>
                  <tbody>

									<!-- Echo out a bunch of Products -->
									<?php for ($x = 0; $x < count($users); $x++) { ?>
										<tr>
											<td>
												<?= $users[$x]->email; ?>
											</td>
											<td>
													<?php echo date("Y/m/d", strtotime($users[$x]->last_login)); ?>
											</td>
											<td>
												<?= $users[$x]->firstname; ?>
											</td>
											<td>
												<?= $users[$x]->lastname; ?>
											</td>
											<td>
                        <!-- <span class="label label-success">Active Admin</span> -->
												<span class="label label-success"><?= $users[$x]->account; ?></span>
											</td>
											<td class="text-right">
												<div class="btn-group">
													<!-- <button class="btn-white btn btn-xs">View</button> -->
													<a href="<?php echo site_url('admin/users/edit/' . $users[$x]->id); ?>" class="btn-white btn btn-xs">Edit</a>
												</div>
											</td>
										</tr>
									<?php	} ?>

                  </tbody>

                  <tfoot>
                    <tr>
                      <td colspan="7">
                        <ul class="pagination float-right"></ul>
                      </td>
                    </tr>
                  </tfoot>

              </table>

              <form action="<?php echo base_url(); ?>admin/users/add">
                <div class="form-group row">
                  <div class="col-sm-4 col-sm-offset-2">
                    <button class="btn btn-primary btn-sm" type="submit"><i class="fas fa-plus"></i> Add User</button>
                  </div>
                </div>
              </form>

            </div><!-- /ibox-content -->
        </div>
    </div>
  </div><!-- /row -->

</div><!-- /wrapper wrapper-content -->