<div class="wrapper wrapper-content animated fadeInRight ecommerce">

    <div class="ibox">

        <div class="ibox-title">
            <h5>Search For Order</h5>
            <div class="ibox-tools">
                <a class="collapse-link">
                    <i class="fas fa-chevron-up"></i>
                </a>
            </div>
        </div><!-- /ibox-title -->

        <div class="ibox-content m-b-sm border-bottom">
            <div class="row">
                <div class="col-sm-4">
                    <div class="form-group">
                        <label class="col-form-label" for="order_id">Order ID</label>
                        <input type="text" id="order_id" name="order_id" value="" placeholder="Order ID" class="form-control">
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="form-group">
                        <label class="col-form-label" for="customer">Customer Email</label>
                        <input type="text" id="customer" name="customer" value="" placeholder="Email" class="form-control">
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="form-group">
                        <label class="col-form-label" for="status">Order status</label>
                        <input type="text" id="status" name="status" value="" placeholder="Status" class="form-control">
                    </div>
                </div>           
            </div><!-- /row -->
        </div><!-- /ibox-content -->

    </div><!-- /ibox -->

    <div class="row">
        <div class="col-lg-12">
            <div class="ibox">
                <div class="ibox-content">
                    <table class="footable table table-stripped toggle-arrow-tiny" data-page-size="15">
                        <thead>
                            <tr>
                                <th>Order ID</th>
                                <th data-hide="phone">Customer Email</th>
                                <th data-hide="phone">Status</th>                               
                                <th data-hide="phone">Date added</th>
                                <th data-hide="phone" class="text-right">Amount</th>
                                <th data-hide="phone" class="text-right">Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            <?php for ($x = 0; $x < count($orders); $x++) { ?>
                                <?php
                                $status = "";
                                switch ($orders[$x]->status) {
                                    case 0:
                                        $status = "Processing";
                                        break;
                                    case 1:
                                        $status = "Shipped";
                                        break;
                                    case 2:
                                        $status = "Cancelled";
                                        break;
                                    default:
                                        $status = "Error";
                                        break;
                                }
                                ?>
                                <tr>
                                    <td>
                                        <?= $orders[$x]->transaction_id; ?>
                                    </td>
                                    <td>
                                        <?= $orders[$x]->email; ?>
                                    </td>
                                    <td>
                                        <span class="label label-primary"><?= $status; ?></span>
                                    </td>
                                    <td>
                                        <?= date("Y/m/d H:i:s", strtotime($orders[$x]->timestamp)); ?>
                                    </td>
                                    <td class="text-right">
                                        <?= $orders[$x]->amount; ?>
                                    </td>
                                    <td class="text-right">
                                        <div class="btn-group">
                                            <button class="btn-white btn btn-xs">View</button>
                                            <!-- <button class="btn-white btn btn-xs">Edit</button> -->
                                            <a href="<?= site_url('admin/orders/delete/' . $orders[$x]->id); ?>" class="btn-white btn btn-xs" onclick="return confirm('are you sure?')">Delete</a>
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

</div><!-- /wrapper-content -->