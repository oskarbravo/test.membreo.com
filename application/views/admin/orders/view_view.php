<div class="wrapper wrapper-content animated fadeInRight ecommerce">

    <a class="btn btn-success" href="<?= site_url('admin/orders/invoice/' . $order->id); ?>">Invoice</a>
    <br><br>

    <div class="ibox">

        <div class="ibox-title">
            <h5>Order ID - <?= $order->transaction_id; ?></h5>
            <div class="ibox-tools">
                <a class="collapse-link">
                    <i class="fas fa-chevron-up"></i>
                </a>
            </div>
        </div><!-- /ibox-title -->

        <div class="ibox-content m-b-sm border-bottom">

            <div class="row">
                <table class="footable table table-stripped toggle-arrow-tiny">
                    <thead>
                        <tr>
                            <th>Order ID:</th>
                            <th>Date Added:</th>
                        </tr>                       
                    </thead>
                    <tbody>
                        <tr>                           
                            <td>
                                <?= $order->transaction_id; ?>
                            </td>
                            <td>
                                <?php echo date("Y-m-d H:i:s", strtotime($order->timestamp)); ?>
                            </td>
                        </tr>
                    </tbody>    
                </table>

            </div>

        </div><!-- /ibox-content -->

    </div><!-- /ibox -->

    <div class="ibox">

        <div class="ibox-title">
            <h5>Shipping And Tracking</h5>
            <div class="ibox-tools">
                <a class="collapse-link">
                    <i class="fas fa-chevron-up"></i>
                </a>
            </div>
        </div><!-- /ibox-title -->

        <div class="ibox-content m-b-sm border-bottom">

            <div class="row">
                <table class="footable table table-stripped toggle-arrow-tiny">
                    <thead>
                            <tr>
                                <th>Current Tracking Number</th>
                                <th>Update Tracking Number</th>
                                <th>Submit</th>
                            </tr>
                        </thead>
                    <tbody>
                        <tr>                           
                            <td>
                                Tracking Number
                            </td>
                            <td>
                                <input type="text" name="tracking-number">
                            </td>
                            <td>
                                <a href="/" class="btn btn-success">Update Tracking</a>
                            </td>
                        </tr>
                    </tbody>    
                </table>

            </div>

        </div><!-- /ibox-content -->

    </div><!-- /ibox -->

    <div class="ibox">

        <div class="ibox-title">
            <h5>Customer Details</h5>
            <div class="ibox-tools">
                <a class="collapse-link">
                    <i class="fas fa-chevron-up"></i>
                </a>
            </div>
        </div><!-- /ibox-title -->

        <div class="ibox-content m-b-sm border-bottom">

            <div class="row">
                <table class="footable table table-stripped toggle-arrow-tiny">
                    <thead>
                            <tr>
                                <th>Email</th>
                                <th>Billing Name</th>
                                <th>Billing Telephone</th>
                                <th>Delivery Name</th>
                                <th>Delivery Telephone</th>
                            </tr>
                        </thead>
                    <tbody>
                        <tr>                           
                            <td>
                                <?= $order->email; ?>
                            </td>
                            <td>
                                <?= $order->billingFirstName . " " . $order->billingLastName; ?>
                            </td>
                            <td>
                                <?= $order->billingPhone; ?>
                            </td>
                            <td>
                                <?= $order->shippingFirstName . " " . $order->shippingLastName; ?>
                            </td>
                            <td>
                                <?= $order->shippingPhone; ?>
                            </td>
                        </tr>
                    </tbody>    
                </table>

            </div>

        </div><!-- /ibox-content -->

    </div><!-- /ibox -->

    <div class="row">

        <div class="col-lg-6">

            <div class="ibox">
                <div class="ibox-content">
                    <table class="footable table table-stripped toggle-arrow-tiny" data-page-size="15">
                        <thead>
                            <tr>
                                <th>Billing Address</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <?= $order->billingFirstName . " " . $order->billingLastName; ?><br/>
                                    <?= $order->billingAddress1; ?><br>
                                    <?= $order->billingAddress2; ?><br>
                                    <?= $order->billingCity; ?><br>
                                    <?= $order->billingPostcode; ?><br>
                                    <?= $order->billingCountry; ?>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div><!-- /ibox -->

        </div><!-- /col-lg-6 -->

        <div class="col-lg-6">

            <div class="ibox">
                <div class="ibox-content">
                    <table class="footable table table-stripped toggle-arrow-tiny" data-page-size="15">
                        <thead>
                            <tr>
                                <th>Shipping Address</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <?= $order->shippingFirstName . " " . $order->shippingLastName; ?><br/>
                                    <?= $order->shippingAddress1; ?><br>
                                    <?= $order->shippingAddress2; ?><br>
                                    <?= $order->shippingCity; ?><br>
                                    <?= $order->shippingPostcode; ?><br>
                                    <?= $order->shippingCountry; ?>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div><!-- /ibox -->

        </div><!-- /col-lg-6 -->

    </div><!-- /row -->

    <div class="row">
        <div class="col-lg-12">
            <div class="ibox">
                <div class="ibox-content">
                    <table class="footable table table-stripped">
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Quantity</th>
                                <th>Unit Price</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>

                            <?php for ($x = 0; $x < count($items); $x++) { ?>

                                <tr>
                                    <td>
                                        <?= $items[$x]['name']; ?>
                                    </td>
                                    <td>
                                        <?= $items[$x]['quantity']; ?>
                                    </td>
                                    <td>
                                        &dollar; <?= $items[$x]['price']; ?>
                                    </td>
                                    <td>
                                        &dollar; <?= number_format($items[$x]['price'] * $items[$x]['quantity'], 2); ?>
                                    </td>
                                </tr>
                            
                            <?php } ?>

                            <tr>
                                <td>
                                    &nbsp;
                                </td>
                                <td>
                                    &nbsp;
                                </td>
                                <td>
                                    <strong>Sub Total:</strong>
                                </td>
                                <td>
                                    &dollar; <?= $total; ?>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    &nbsp;
                                </td>
                                <td>
                                    &nbsp;
                                </td>
                                <td>
                                    <strong>Shipping:</strong>
                                </td>
                                <td>
                                    &dollar; 0.00
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    &nbsp;
                                </td>
                                <td>
                                    &nbsp;
                                </td>
                                <td>
                                    <strong>Total:</strong>
                                </td>
                                <td>
                                    &dollar; <?= $total; ?>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div><!-- /row -->

</div><!-- /wrapper-content -->