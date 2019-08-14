<div class="wrapper wrapper-content animated fadeInRight">

  <div class="row">
    <div class="col-lg-12">
        <div class="ibox">
            <div class="ibox-content">

              <table class="footable table table-stripped toggle-arrow-tiny" data-page-size="15">
                  <thead>
                    <tr>
                        <th data-toggle="true">Category ID</th>
                        <th data-hide="phone">Category Name</th>
                        <th data-hide="phone" class="text-right">Status</th>
                        <th data-hide="phone" class="text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody>

									<!-- Echo out a bunch of Categories -->
									<?php for ($x = 0; $x < count($categories); $x++) { ?>
                    <?php 
                    if ($categories[$x]->status == 0) {
                      $status = "Active";
                    } else {
                      $status = "Inactive";
                    }
                    ?>

										<tr>
                      <td><?= $categories[$x]->id; ?></td>
                      <td><?= $categories[$x]->category; ?></td>
											<td class="text-right">
												<span class="label label-success"><?= $status; ?></span>
											</td>
											<td class="text-right">
												<div class="btn-group">
													<!-- <button class="btn-white btn btn-xs">View</button> -->
													<a href="<?= site_url('admin/categories/edit/' . $categories[$x]->id); ?>"><button class="btn-white btn btn-xs">Edit</button></a>
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

              <form action="<?php echo base_url(); ?>admin/categories/add">
                <div class="form-group row">
                  <div class="col-sm-4 col-sm-offset-2">
                    <button class="btn btn-primary btn-sm" type="submit"><i class="fas fa-plus"></i> Add Category</button>
                  </div>
                </div>
              </form>

            </div><!-- /ibox-content -->
        </div>
    </div>
  </div><!-- /row -->

</div><!-- /wrapper wrapper-content -->