<div class="wrapper wrapper-content animated fadeInRight ecommerce">

    <div class="ibox">

        <div class="ibox-title">
            <h5>Order ID - a190820103746.5</h5>
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
                                a190820103746.5
                            </td>
                            <td>
                                <?php echo date("h:i:s A"); ?>
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
                                Customer Email
                            </td>
                            <td>
                                Customer Name
                            </td>
                            <td>
                                Customer Telephone
                            </td>
                            <td>
                                Delivery Name
                            </td>
                            <td>
                                Delivery Telephone
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
                                    Customer Name<br/>
                                    Street Add 1<br>
                                    Street Add 2<br>
                                    Customer City<br>
                                    Post Code<br>
                                    Country
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
                                    Customer Name<br/>
                                    Street Add 1<br>
                                    Street Add 2<br>
                                    Customer City<br>
                                    Post Code<br>
                                    Country
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

                            <?php for ($x = 0; $x <= 6; $x++) { ?>

                                <tr>
                                    <td>
                                        Product <?php echo $x; ?>
                                    </td>
                                    <td>
                                        1
                                    </td>
                                    <td>
                                        &dollar; 450.99
                                    </td>
                                    <td>
                                        &dollar; 450.99
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
                                    &dollar; 450.99
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
                                    &dollar; 450.99
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div><!-- /row -->

</div><!-- /wrapper-content -->