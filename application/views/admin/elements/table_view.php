<div class="wrapper wrapper-content animated fadeInRight">

  <div class="ibox-content m-b-sm border-bottom">
    <div class="row">
        <div class="col-sm-4">
            <div class="form-group">
                <label class="col-form-label" for="product_name">Product Name</label>
                <input type="text" id="product_name" name="product_name" value="" placeholder="Product Name" class="form-control">
            </div>
        </div>
        <div class="col-sm-2">
            <div class="form-group">
                <label class="col-form-label" for="price">Price</label>
                <input type="text" id="price" name="price" value="" placeholder="Price" class="form-control">
            </div>
        </div>
        <div class="col-sm-2">
            <div class="form-group">
                <label class="col-form-label" for="quantity">Quantity</label>
                <input type="text" id="quantity" name="quantity" value="" placeholder="Quantity" class="form-control">
            </div>
        </div>
        <div class="col-sm-4">
            <div class="form-group">
                <label class="col-form-label" for="status">Status</label>
                <select name="status" id="status" class="form-control">
                    <option value="1" selected>Enabled</option>
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
                          <th data-toggle="true">Product Name</th>
                          <th data-hide="phone">Model</th>
                          <th data-hide="all">Description</th>
                          <th data-hide="phone">Price</th>
                          <th data-hide="phone,tablet" >Quantity</th>
                          <th data-hide="phone">Status</th>
                          <th class="text-right" data-sort-ignore="true">Action</th>
                      </tr>
                    </thead>
                    <tbody>

                      <!-- Echo out a bunch of Products -->
                      <?php for ($x = 1; $x <= 64; $x++) { ?>
                        <tr>
                          <td>
                            Example product <?php echo $x; ?>
                          </td>
                          <td>
                            SKU <?php echo $x; ?>
                          </td>
                          <td>
                              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea consequatur id doloremque minus iure quisquam pariatur. Maiores error maxime debitis, odio voluptas molestiae explicabo obcaecati commodi possimus laudantium et in.
                          </td>
                          <td>
                            $40.00
                          </td>
                          <td>
                            4300
                          </td>
                          <td>
                            <span class="label label-danger">Enable</span>
                          </td>
                          <td class="text-right">
                            <div class="btn-group">
                              <button class="btn-white btn btn-xs">View</button>
                              <button class="btn-white btn btn-xs">Edit</button>
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
            </div>
        </div>
    </div>
  </div><!-- /row -->

</div><!-- /wrapper wrapper-content -->