<div class="wrapper wrapper-content animated fadeInRight">
    <?php for ($x = 0; $x < count($products); $x++) { ?>
        <?php if ($x % 4 == 0) { ?>
            <div class="row">
        <?php } ?>
        <div class="col-md-3">
            <div class="ibox">
                <div class="ibox-content product-box">

                    <div class="product-imitation" 
                        style="
                        color: #ffffff;
                        background-image: url(<?php echo base_url(); ?>img/uploads/<?= $products[$x]->id; ?>/1.jpg);
                        background-repeat: no-repeat;
                        background-size: cover;
                        background-position: center center;
                        ">
                        <?= $products[$x]->name; ?>
                    </div>
                    <div class="product-desc">
                        <span class="product-price">
                            $<?=$products[$x]->price; ?>
                        </span>
                        <small class="text-muted">Category</small>
                        <a href="#" class="product-name"> <?= $products[$x]->name; ?> </a>
                        <div class="small m-t-xs">
                            <?= substr($products[$x]->description, 0, 60); ?>...
                        </div>
                        <div class="m-t text-right">
                            <a href="<?php echo base_url(); ?>" class="btn btn-xs btn-outline btn-success" target="_blank">View on Site <i class="fas fa-angle-right"></i> </a>
                            <a href="<?php echo base_url(); ?>admin/products/edit/<?= $products[$x]->id; ?>" class="btn btn-xs btn-outline btn-primary">Edit <i class="fas fa-angle-right"></i> </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <?php if ($x % 4 == 3 || $x == count($products) - 1): ?>
            </div><!-- /row -->
        <?php endif ?>
<?php	} ?>

</div><!-- /wrapper wrapper-content -->