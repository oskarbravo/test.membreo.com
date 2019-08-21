<!DOCTYPE html>
<html>

<head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title><?php echo $title; ?></title>

    <link href="<?php echo base_url(); ?>css/admin/bootstrap.min.css" rel="stylesheet">
    <link href="font-awesome/css/font-awesome.css" rel="stylesheet">

    <link href="<?php echo base_url(); ?>css/admin/animate.css" rel="stylesheet">
    <link href="<?php echo base_url(); ?>css/admin/style.css" rel="stylesheet">

</head>

<body class="white-bg">
<div class="wrapper wrapper-content p-xl">
    <div class="ibox-content p-xl">
            <div class="row">
                <div class="col-sm-6">
                    <h5>From:</h5>
                    <address>
                        <strong>Company Name</strong><br>
                        Street 1<br>
                        Street 2<br>
                        City<br>
                        Post Code<br>
                        <abbr title="Phone">Phone:</abbr> (120) 9000-4321
                    </address>
                </div>

                <div class="col-sm-6 text-right">
                    <h4>Order No.</h4>
                    <h4 class="text-navy"><?= $order->transaction_id; ?></h4>
                    <span>To:</span>
                    <address>
                        <strong><?= $order->shippingFirstName . " " . $order->shippingLastName; ?></strong><br>
                        <?= $order->shippingAddress1; ?><br>
                        <?= $order->shippingAddress2; ?><br>
                        <?= $order->shippingCity; ?><br>
                        <?= $order->shippingPostcode; ?><br>
                        <abbr title="Phone">Phone:</abbr> <?= $order->shippingPhone; ?>
                    </address>
                    <p>
                        <span><strong>Invoice Date:</strong> <?php echo date("Y-m-d H:i:s", strtotime($order->timestamp)); ?></span><br/>
                    </p>
                </div>
            </div>

            <div class="table-responsive m-t">
                <table class="table invoice-table">
                    <thead>
                    <tr>
                        <th>Item List</th>
                        <th>Quantity</th>
                        <th>Unit Price</th>
                        <th>Total Price</th>
                    </tr>
                    </thead>
                    <tbody>

                     <?php for ($x = 0; $x < count($items); $x++) { ?>

                        <tr>
                            <td><div><strong><?= $items[$x]['name']; ?></strong></div>
                                <!-- <small>Product Description</small></td> -->
                            <td><?= $items[$x]['quantity']; ?></td>
                            <td>$<?= $items[$x]['price']; ?></td>
                            <td>$<?= number_format($items[$x]['price'] * $items[$x]['quantity'], 2); ?></td>
                        </tr>
                            
                    <?php } ?>
                    
                    </tbody>
                </table>
            </div><!-- /table-responsive -->

            <table class="table invoice-total">
                <tbody>
                <tr>
                    <td><strong>Sub Total:</strong></td>
                    <td>$<?= $total; ?></td>
                </tr>
                <tr>
                    <td><strong>Shipping:</strong></td>
                    <td>$0.00</td>
                </tr>
                <tr>
                    <td><strong>Total:</strong></td>
                    <td>$<?= $total; ?></td>
                </tr>
                </tbody>
            </table>
            <div class="well m-t"><strong>Comments: </strong>
                No Comments
            </div>
        </div>

    </div>

    <!-- Mainly scripts -->
    <script src="<?php echo base_url(); ?>js/admin/jquery-3.1.1.min.js"></script>
    <script src="<?php echo base_url(); ?>js/admin/popper.min.js"></script>
    <script src="<?php echo base_url(); ?>js/admin/bootstrap.js"></script>
    <script src="<?php echo base_url(); ?>js/admin/plugins/metisMenu/jquery.metisMenu.js"></script>

    <!-- Custom and plugin javascript -->
    <script src="<?php echo base_url(); ?>js/admin/inspinia.js"></script>

    <script type="text/javascript">
        window.print();
    </script>

</body>

</html>